from vector_store import VectorStore


class RetrieverService:

    def __init__(self):

        vector_db = VectorStore().load_vector_store()

        self.retriever = vector_db.as_retriever(
            search_type="similarity",
            search_kwargs={"k": 3}
        )

    def retrieve(self, question):

        documents = self.retriever.invoke(question)

        return documents