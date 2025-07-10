pub trait Model {
    fn new() -> Self;
    fn update_prompt(&mut self, prompt: &str, current_text: &str, is_error: bool);
    async fn query(&mut self) -> String;
    fn get_prev_code(&mut self) -> String;
    fn get_next_code(&mut self) -> String;
}
