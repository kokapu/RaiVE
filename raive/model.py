import google.generativeai as genai


class GeminiPro25:
    def __init__(self, coding_env="TidalCycles", language="JavaScript"):
        self.google_api_key = "AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU"
        self.prompt = ""
        self.existing_code = ""
        self.coding_env = coding_env
        self.language = language

        genai.configure(api_key=self.google_api_key)
        self.session = genai.ChatSession(genai.GenerativeModel("gemini-2.5-pro-exp-03-25"))

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
        try:
            response = self.session.send_message(self.prompt)
        except Exception as e:
            print(f"Error generating content: {e}")
            return ""
        code = response.text
        code = code.strip("```").strip("javascript")
        if "tidalcycles/dirt-samples" not in code:
            code = "samples('github:tidalcycles/dirt-samples')\n" + code
        self.existing_code = code
        return code
