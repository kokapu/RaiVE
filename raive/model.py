import google.generativeai as genai
from flask import session


class GeminiPro25:
    def __init__(self):
        self.google_api_keys = [
            "AIzaSyA0VpcGCGprYaF0ilGZo4tSt7RP1THihR0",
            "AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU",
        ]
        self.cur_key = session.get("cur_key", 0)
        self.session = None
        self.update_session()

    def update_session(self):
        genai.configure(api_key=self.google_api_keys[self.cur_key])
        self.session = genai.ChatSession(
            genai.GenerativeModel("gemini-2.5-pro-exp-03-25")
        )

    def rotate_key(self):
        self.cur_key = (self.cur_key + 1) % len(self.google_api_keys)
        session["cur_key"] = self.cur_key
        self.update_session()

    def update_prompt(self, user_prompt):
        if not session.get("prompt"):
            with open("raive/static/prompts/initial.txt", "r") as file:
                session["prompt"] = file.read()
            session["prompt"] += user_prompt
        else:
            with open("raive/static/prompts/followup.txt", "r") as file:
                session["prompt"] = file.read()
            session["prompt"] += "Code: " + session.get("existing_code", "") + "\n\n"
            session["prompt"] += "Prompt: " + user_prompt + "\n\n"

    def get_code(self, user_prompt, current_code):
        session["existing_code"] = current_code
        self.update_prompt(user_prompt)
        return self.query_model(attempts=0)

    def query_model(self, attempts):
        if attempts >= len(self.google_api_keys):
            print("All API keys exhausted.")
            return ""
        try:
            response = self.session.send_message(session["prompt"])
            code = response.text.strip("```").strip("javascript").strip()
            if "tidalcycles/dirt-samples" not in code:
                code = "samples('github:tidalcycles/dirt-samples')\n" + code
            session["existing_code"] = code
            return code
        except Exception as e:
            print(f"Error generating content with key #{self.cur_key}: {e}")
            self.rotate_key()
            return self.query_model(attempts + 1)
