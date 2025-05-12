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

    async fn query(&mut self, attempts: usize) -> String {
        match self
            .model
            .generate_content()
            .with_system_prompt("You are a helpful assistant.") //TODO: make this better
            .with_user_message(&self.prompt)
            .execute()
            .await
        {
            Ok(response) => {
                let response_text = response.text();
                let mut text = response_text.as_str();
                text = text.trim_matches('`').trim_start_matches("javascript");
                let mut code = text.trim().to_string();

                if !code.contains("tidalcycles/dirt-samples") {
                    code = format!("samples('github:tidalcycles/dirt-samples')\n{}", code);
                }

                code
            }
            Err(_) => {
                if attempts <= NUM_API_KEYS {
                    self.update_api_key();
                    Box::pin(self.query(attempts + 1)).await
                } else {
                    "".into()
                }
            }
        }
    }
}
