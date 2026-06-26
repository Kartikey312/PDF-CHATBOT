import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UploadCard from "./components/UploadCard";
import { useChat } from "./hooks/useChat";

function App() {
    const { messages, isUploading, isAsking, error, pdfName, uploadSummary, handleUpload, handleAsk } = useChat();

    return (
        <div className="app-shell">
            <Header title="PDF Chatbot" subtitle="Upload a PDF and ask questions grounded in its pages." />

            <div className="app-grid">
                <Sidebar pdfName={pdfName} uploadSummary={uploadSummary} error={error} />

                <main className="chat-panel">
                    <UploadCard onUpload={handleUpload} isUploading={isUploading} error={error} />
                    <ChatWindow messages={messages} isAsking={isAsking} />
                    <ChatInput onSubmit={handleAsk} disabled={isAsking || isUploading} />
                </main>
            </div>
        </div>
    );
}

export default App;