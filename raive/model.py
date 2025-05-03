import google.generativeai as genai
from flask import session


class GeminiPro25:
    def __init__(self):
        self.google_api_keys = [
            "AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU",
            "AIzaSyA0VpcGCGprYaF0ilGZo4tSt7RP1THihR0",
        ]
        self.cur_key = session.get("cur_key", 0)
        self.prompt = session.get("prompt", "")
        self.existing_code = session.get("existing_code", "")
        self.session = None
        self.update_session()

    def update_session(self):
        key = self.google_api_keys[self.cur_key]
        self.cur_key = (self.cur_key + 1) % len(self.google_api_keys)
        session["cur_key"] = self.cur_key

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
        session["prompt"] = self.prompt

    def get_code(self, user_prompt, current_code):
        self.existing_code = current_code
        self.update_prompt(user_prompt)
        code = self.query_model(attempts=0)
        if code:
            self.existing_code = code
            session["existing_code"] = self.existing_code
        return code

    def query_model(self, attempts):
        if attempts >= len(self.google_api_keys):
            return ""
        try:
            response = self.session.send_message(self.prompt)
            code = response.text.strip("```").strip("javascript")
            if "tidalcycles/dirt-samples" not in code:
                code = "samples('github:tidalcycles/dirt-samples')\n" + code
            return code
        except Exception:
            self.update_session()
            return self.query_model(attempts + 1)
