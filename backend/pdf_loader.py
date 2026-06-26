from langchain_community.document_loaders import PyPDFLoader


class PDFLoader:

    def __init__(self, pdf_path):
        self.pdf_path = pdf_path

    def load_pdf(self):

        loader = PyPDFLoader(self.pdf_path)

        documents = loader.load()

        return documents


if __name__ == "__main__":

    pdf = PDFLoader("data/insurance.pdf")

    documents = pdf.load_pdf()

    print(f"Total Pages : {len(documents)}")

    for i, doc in enumerate(documents):

        print("=" * 50)

        print(f"Page : {doc.metadata['page']}")

        print(f"Source : {doc.metadata['source']}")

        print()

        print(doc.page_content[:500])

        print()

        print("=" * 50)