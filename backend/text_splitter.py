from pdf_loader import PDFLoader
from text_splitter import TextSplitter

loader = PDFLoader("data/insurance.pdf")

documents = loader.load_pdf()

splitter = TextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)

chunks = splitter.split_documents(documents)

print(f"Total Pages : {len(documents)}")

print(f"Total Chunks : {len(chunks)}")

print("=" * 60)

print(chunks[0].page_content)

print("=" * 60)

print(chunks[0].metadata)