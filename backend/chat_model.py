from langchain_google_genai import ChatGoogleGenerativeAI

from config import GOOGLE_API_KEY


class ChatModel:

    def __init__(self, model: str = "gemini-1.5-flash", temperature: float = 0):
        self.llm = ChatGoogleGenerativeAI(
            model=model,
            google_api_key=GOOGLE_API_KEY,
            temperature=temperature,
        )

    def get_llm(self):
        return self.llm
