# 📄 PDF ChatBot 

A Retrieval-Augmented Generation (RAG) application that allows users to upload PDF documents and ask questions using **Google Gemini AI**. The application extracts text, generates embeddings, stores them in **ChromaDB**, and retrieves relevant content to provide accurate answers.

## 🚀 Features

* Upload PDF documents
* Extract and split PDF content
* Generate embeddings using Gemini
* Store embeddings in ChromaDB
* Semantic search with RAG
* AI-powered question answering
* FastAPI backend
* React + TypeScript frontend

## 🛠️ Tech Stack

**Frontend**

* React
* TypeScript
* Tailwind CSS
* Axios

**Backend**

* FastAPI
* LangChain
* Google Gemini
* ChromaDB
* PyPDF

## 📁 Project Structure

```text
pdf-chatbot/
├── backend/
│   ├── app.py
│   ├── pdf_loader.py
│   ├── text_splitter.py
│   ├── embeddings.py
│   ├── vector_store.py
│   ├── retriever.py
│   ├── rag.py
│   └── data/
│
└── frontend/
```

## ⚙️ Installation

### Backend

```bash
pip install -r requirements.txt
uvicorn app:app --reload
```

Create a `.env` file:

```env
GOOGLE_API_KEY=YOUR_API_KEY
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔄 Workflow

```text
PDF
 ↓
PDF Loader
 ↓
Text Splitter
 ↓
Gemini Embeddings
 ↓
ChromaDB
 ↓
Retriever
 ↓
Gemini LLM
 ↓
Answer
```

## 📡 API Endpoints

| Method | Endpoint  | Description                          |
| ------ | --------- | ------------------------------------ |
| POST   | `/upload` | Upload and index a PDF               |
| POST   | `/chat`   | Ask questions about the uploaded PDF |

## 🎯 Future Improvements

* Chat history
* Multiple PDF support
* Streaming responses
* Authentication
* Docker deployment

