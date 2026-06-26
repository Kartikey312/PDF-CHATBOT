from langchain_core.prompts import ChatPromptTemplate

from retriever import RetrieverService
from chat_model import ChatModel


class RAGService:

    def __init__(self):
        self.retriever = RetrieverService()
        self.llm = ChatModel().get_llm()

        self.prompt = ChatPromptTemplate.from_template(
            """
You are an AI assistant.

Answer ONLY using the provided context.

If the answer is not present in the context, say:

"I could not find this information in the PDF."

Context:

{context}

Question:

{question}
"""
        )

    def ask(self, question):
        docs = self.retriever.retrieve(question)

        context = "\n\n".join(doc.page_content for doc in docs)

        prompt = self.prompt.invoke(
            {
                "context": context,
                "question": question,
            }
        )

        response = self.llm.invoke(prompt)

        return response.content
