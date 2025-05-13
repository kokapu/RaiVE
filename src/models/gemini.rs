use gemini_rust::Gemini;

use crate::model::Model;

const NUM_API_KEYS: usize = 2;
const API_KEYS: [&str; NUM_API_KEYS] = [
    "AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU",
    "AIzaSyA0VpcGCGprYaF0ilGZo4tSt7RP1THihR0",
];

static INITIAL_PROMPT: &str = include_str!("prompts/initial.txt");
static FOLLOWUP_PROMPT: &str = include_str!("prompts/followup.txt");

pub struct GeminiClient {
    model: Gemini,
    cur_api_key: usize,
    prompt: String,
}

impl GeminiClient {
    fn update_api_key(&mut self) {
        self.model = Gemini::new(API_KEYS[self.cur_api_key]);
        self.cur_api_key = (self.cur_api_key + 1) % NUM_API_KEYS;
    }
}

impl Model for GeminiClient {
    fn new() -> Self {
        GeminiClient {
            model: Gemini::new(API_KEYS[0]),
            cur_api_key: 1,
            prompt: "".into(),
        }
    }

    fn update_prompt(&mut self, user_prompt: &str, existing_code: &str) {
        if self.prompt.trim().is_empty() {
            // First-time prompt: start with initial template
            self.prompt = format!("{}Prompt: {}\n\n", INITIAL_PROMPT, user_prompt);
        } else {
            // Follow-up: add prior context and user prompt
            self.prompt = format!(
                "{}Code: {}\n\nPrompt: {}\n\n",
                FOLLOWUP_PROMPT, existing_code, user_prompt
            );
        }
    }

    /// Try each API key in turn. On a non-empty reply, return it immediately;
    /// otherwise rotate to the next key. If all keys fail, return an empty string.
    async fn query(&mut self) -> String {
        for _ in 0..NUM_API_KEYS {
            if let Ok(response) = self
                .model
                .generate_content()
                .with_system_prompt("You are a helpful assistant.")
                .with_user_message(&self.prompt)
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
                    return code;
                }
            }

            // Rotate API key and try again
            self.update_api_key();
        }

        // All keys exhausted or always empty → give up
        String::new()
    }
}
