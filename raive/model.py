import google.generativeai as genai


class GeminiPro25:
    def __init__(self, coding_env="TidalCycles", language="JavaScript"):
        self.google_api_keys = ["AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU"]
        self.prompt = ""
        self.existing_code = ""
        self.coding_env = coding_env
        self.language = language
        self.cur_key = 0
        self.update_session()

    def update_session(self):
        key = self.google_api_keys[self.cur_key]
        self.cur_key = (self.cur_key + 1) % len(self.google_api_keys)

        genai.configure(api_key=key)
        self.session = genai.ChatSession(
            genai.GenerativeModel("gemini-2.5-pro-exp-03-25")
        )

    def update_prompt(self, user_prompt):
        if not self.prompt:
            with open("raive/static/prompts/initial.txt", "r") as file:
                self.prompt = file.read()
            self.prompt += user_prompt
        else:
            with open("raive/static/prompts/followup.txt", "r") as file:
                self.prompt = file.read()
            self.prompt += "Code: " + self.existing_code + "\n\n"
            self.prompt += "Prompt: " + user_prompt + "\n\n"

    def get_code(self, user_prompt, current_code):
        self.existing_code = current_code
        self.update_prompt(user_prompt)
        code = self.query_model(self.cur_key)
        if code:
            self.existing_code = code
        return code

    def query_model(self, attempts):
        if attempts == len(self.google_api_keys):
            return ""
        else:
            try:
                response = self.session.send_message(self.prompt)
            except Exception as e:
                self.update_session()
                return self.query_model(attempts + 1)
            code = response.text
            code = code.strip("```").strip("javascript")
            if "tidalcycles/dirt-samples" not in code:
                code = "samples('github:tidalcycles/dirt-samples')\n" + code
            return code
