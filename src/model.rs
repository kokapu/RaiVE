pub trait Model {
    fn new() -> Self;
    async fn query(&self, promtp: &str) -> String;
}
