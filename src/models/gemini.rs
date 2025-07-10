use gemini_rust::Gemini;
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::js_sys::JsString;

use crate::model::Model;

static INITIAL_USER_PROMPT: &str = include_str!("prompts/initial_user.txt");
static INITIAL_SYSTEM_PROMPT: &str = include_str!("prompts/initial_system.txt");
static FOLLOWUP_USER_PROMPT: &str = include_str!("prompts/followup_user.txt");
static FOLLOWUP_SYSTEM_PROMPT: &str = include_str!("prompts/followup_system.txt");
static ERROR_USER_PROMPT: &str = include_str!("prompts/error_user.txt");
static ERROR_SYSTEM_PROMPT: &str = include_str!("prompts/error_system.txt");

pub struct GeminiClient {
    model: Gemini,
    user_prompt: String,
    system_prompt: String,
    code_history: Vec<String>,
    cur_code_id: Option<usize>,
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(thread_local_v2, js_name = GEMINI_API_KEY)]
    static GEMINI_API_KEY: JsString;
}

fn get_api_key() -> String {
    GEMINI_API_KEY
        .with(JsString::clone)
        .as_string()
        .expect("GEMINI_API_KEYS must be a string")
}

impl Model for GeminiClient {
    fn new() -> Self {
        let api_key: String = get_api_key();

        GeminiClient {
            model: Gemini::new(api_key),
            user_prompt: "".into(),
            system_prompt: "".into(),
            code_history: vec![],
            cur_code_id: None,
        }
    }

    fn update_prompt(&mut self, user_description: &str, user_code: &str, is_error: bool) {
        if is_error {
            self.system_prompt = ERROR_SYSTEM_PROMPT.to_string();
            self.user_prompt = ERROR_USER_PROMPT
                .replace("{user_code}", user_code);
            return;
        }
        if self.user_prompt.trim().is_empty() {
            // Initial prompt
            self.system_prompt = INITIAL_SYSTEM_PROMPT.to_string();
            self.user_prompt = INITIAL_USER_PROMPT.replace("{user_description}", user_description)
        } else {
            // Follow-up prompt
            self.system_prompt = FOLLOWUP_SYSTEM_PROMPT.to_string();
            self.user_prompt = FOLLOWUP_USER_PROMPT
                .replace("{user_description}", user_description)
                .replace("{user_code}", user_code);
        }
    }

    /// Try each API key in turn. On a non-empty reply, return it immediately;
    /// otherwise rotate to the next key. If all keys fail, return an empty string.
    async fn query(&mut self) -> String {
        if let Ok(response) = self
            .model
            .generate_content()
            .with_system_prompt(&self.system_prompt)
            .with_user_message(&self.user_prompt)
            .execute()
            .await
        {
            let mut code = response
                .text()
                .trim_matches('`')
                .trim_start_matches("javascript")
                .trim()
                .to_string();
            if !code.is_empty() && !code.contains("tidalcycles/dirt-samples") {
                code = format!("samples('github:tidalcycles/dirt-samples')\n{}", code);
            }
            if !code.is_empty() {
                self.update_history(code.clone());
                return code;
            }
        }
        String::new()
    }

    fn get_prev_code(&mut self) -> String {
        // Move back one step, but never below 0
        let current = self.cur_code_id.unwrap_or(0);
        let new_id = current.saturating_sub(1);
        self.cur_code_id = Some(new_id);
        self.code_history.get(new_id).cloned().unwrap_or_default()
    }

    fn get_next_code(&mut self) -> String {
        let current = self.cur_code_id.unwrap_or(0);

        // Only move forward if not at the last valid index
        if current + 1 < self.code_history.len() {
            let new_id = current + 1;
            self.cur_code_id = Some(new_id);
            self.code_history.get(new_id).cloned().unwrap_or_default()
        } else {
            // Don't move beyond end
            self.code_history.get(current).cloned().unwrap_or_default()
        }
    }
}

impl GeminiClient {
    fn update_history(&mut self, code: String) {
        if let Some(id) = self.cur_code_id {
            // Truncate history to remove any redo entries
            self.code_history.truncate(id + 1);
            self.code_history.push(code);
            self.cur_code_id = Some(id + 1);
        } else {
            // First entry
            self.code_history.clear();
            self.code_history.push(code);
            self.cur_code_id = Some(0);
        }
    }
}
