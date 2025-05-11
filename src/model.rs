pub trait Model {
    fn new() -> Self;
    fn update_prompt(&mut self, prompt: &str, current_text: &str);
    async fn query(&mut self, attempts: usize) -> String;
}
