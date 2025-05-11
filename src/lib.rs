mod model;
mod models;

use once_cell::sync::Lazy;
use std::sync::Mutex;
use wasm_bindgen::prelude::*;

use model::Model;
use models::gemini::GeminiClient;

static CLIENT: Lazy<Mutex<Option<GeminiClient>>> = Lazy::new(|| Mutex::new(None));

#[wasm_bindgen(start)]
pub fn init_client() {
    console_error_panic_hook::set_once(); // NOTE: print Rust panics to browser console
    let mut client = CLIENT.lock().unwrap();
    *client = Some(GeminiClient::new());
}

#[wasm_bindgen]
pub async fn query_model(prompt: &str, current_text: &str) -> String {
    let mut client_opt = CLIENT.lock().unwrap();
    if let Some(client) = &mut (*client_opt) {
        client.update_prompt(prompt, current_text);
        client.query(0).await
    } else {
        unreachable!()
    }
}
