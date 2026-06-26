from langchain_google_genai import GoogleGenerativeAIEmbeddings

from config import GOOGLE_API_KEY


class EmbeddingService:

    def __init__(self):

        self.embedding_model = GoogleGenerativeAIEmbeddings(
            model="models/text-embedding-004",
            google_api_key=GOOGLE_API_KEY,
        )

    def get_embedding_model(self):
        return self.embedding_model