mod model;
mod models;

extern crate wasm_bindgen;

use futures::lock::Mutex;
use once_cell::sync::Lazy;
use wasm_bindgen::prelude::*;

use model::Model;
use models::gemini::GeminiClient;

// ✅ Use an async-aware Mutex in a static
static CLIENT: Lazy<Mutex<Option<GeminiClient>>> = Lazy::new(|| Mutex::new(None));

#[wasm_bindgen(start)]
pub fn init_client() {
    console_error_panic_hook::set_once(); // Print Rust panics to browser console

    // Because this function isn't async, we need to spawn a task or block_on temporarily
    wasm_bindgen_futures::spawn_local(async {
        let mut client = CLIENT.lock().await;
        *client = Some(GeminiClient::new());
    });
}

#[wasm_bindgen]
pub async fn query_model(prompt: &str, current_text: &str) -> String {
    let mut client_opt = CLIENT.lock().await;
    if let Some(client) = &mut *client_opt {
        client.update_prompt(prompt, current_text);
        client.query().await
    } else {
        "".into()
    }
}
