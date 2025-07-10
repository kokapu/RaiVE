mod model;
mod models;

extern crate wasm_bindgen;

use futures::lock::Mutex;
use once_cell::sync::Lazy;
use wasm_bindgen::prelude::*;

use model::Model;
use models::gemini::GeminiClient;
// Debugging
// use web_sys::console; // console::log_1(&"<string>".into());

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
pub async fn query_model(prompt: &str, current_text: &str, is_error: bool) -> String {
    let mut client_opt = CLIENT.lock().await;
    if let Some(client) = &mut *client_opt {
        client.update_prompt(prompt, current_text, is_error);
        client.query().await
    } else {
        "".into()
    }
}

#[wasm_bindgen]
pub async fn get_prev_code() -> String {
    let mut client_opt = CLIENT.lock().await;
    if let Some(client) = &mut *client_opt {
        client.get_prev_code()
    } else {
        "".into()
    }
}

#[wasm_bindgen]
pub async fn get_next_code() -> String {
    let mut client_opt = CLIENT.lock().await;
    if let Some(client) = &mut *client_opt {
        client.get_next_code()
    } else {
        "".into()
    }
}
