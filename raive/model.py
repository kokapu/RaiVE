import google.generativeai as genai


class GeminiPro25:
    def __init__(self, coding_env="TidalCycles", language="JavaScript"):
        self.google_api_key = "AIzaSyD1o715Q2sm8we7o_3AHt6TIrs8Wg571yU"
        self.prompt = ""
        self.existing_code = ""
        self.coding_env = coding_env
        self.language = language

        genai.configure(api_key=self.google_api_key)
        self.model = genai.GenerativeModel("gemini-2.5-pro-exp-03-25")

    def update_prompt(self, user_prompt):
        if not self.prompt:
            self.prompt = f"Generate live coding code in {self.coding_env} in {self.language} for the following user prompt. Return just the code and nothing else.:\n\n"
            self.prompt += user_prompt
        else:
            self.prompt = f"The live coding code in {self.coding_env} we have so far is as follows:\n\n"
            self.prompt += self.existing_code + "\n\n"
            self.prompt += "Update the code to include the following. Return just the new code to add and nothing else.:\n\n"
            self.prompt += user_prompt

    def get_code(self, user_prompt):
        self.update_prompt(user_prompt)
        response = self.model.generate_content(self.prompt)
        code = response.text
        self.existing_code += code
        return code
