import os
import shutil

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pdf_loader import PDFLoader
from text_splitter import TextSplitter
from vector_store import VectorStore
from rag_service import RAGService

app = FastAPI(title="PDF Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = "data"
os.makedirs(DATA_DIR, exist_ok=True)


class AskRequest(BaseModel):
    question: str


@app.get("/")
def health():
    return {"status": "ok"}


@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported.")

    pdf_path = os.path.join(DATA_DIR, file.filename)
    with open(pdf_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    documents = PDFLoader(pdf_path).load_pdf()
    chunks = TextSplitter().split_documents(documents)
    VectorStore().create_vector_store(chunks)

    return {
        "message": "PDF processed and indexed successfully.",
        "filename": file.filename,
        "pages": len(documents),
        "chunks": len(chunks),
    }


@app.post("/ask")
def ask(request: AskRequest):
    if not request.question.strip():
        raise HTTPException(status_code=400, detail="Question cannot be empty.")

    answer = RAGService().ask(request.question)
    return {"question": request.question, "answer": answer}
