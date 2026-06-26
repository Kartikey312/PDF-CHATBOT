from langchain_chroma import Chroma
from embeddings import EmbeddingService


class VectorStore:
    def __init__(self):
        self.embedding_model = EmbeddingService().get_embedding_model()
        self.persist_directory = "vector_db"

    def create_vector_store(self, chunks):
        return Chroma.from_documents(
            documents=chunks,
            embedding=self.embedding_model,
            persist_directory=self.persist_directory,
        )

    def load_vector_store(self):
        return Chroma(
            persist_directory=self.persist_directory,
            embedding_function=self.embedding_model,
        )