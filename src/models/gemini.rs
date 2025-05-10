use gemini_rust::{Content, Gemini, Message, Role};
use tokio;

use crate::model::Model;

const API_KEYS: [&str; 2] = [
    "AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU",
    "AIzaSyA0VpcGCGprYaF0ilGZo4tSt7RP1THihR0",
];

pub struct GeminiClient {
    model: Gemini,
}

impl GeminiClient {
    fn update_api_key() {}
}

impl Model for GeminiClient {
    fn new() -> Self {
        todo!()
    }

    async fn query(&self, prompt: &str) -> String {
        todo!()
    }
}
