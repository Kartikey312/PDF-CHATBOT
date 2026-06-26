import { useState } from "react";
import { askQuestion, uploadPdf } from "../services/api";
import type { Message, UploadResponse } from "../types/chat";

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [isAsking, setIsAsking] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pdfName, setPdfName] = useState<string | null>(null);
    const [uploadSummary, setUploadSummary] = useState<UploadResponse | null>(null);

    const handleUpload = async (file: File) => {
        setIsUploading(true);
        setError(null);

        try {
            const data = await uploadPdf(file);
            setPdfName(file.name);
            setUploadSummary(data);
            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "assistant",
                    content: `Uploaded ${file.name}. ${data.pages} pages indexed.`,
                },
            ]);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleAsk = async (question: string) => {
        if (!question.trim()) {
            return;
        }

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: question,
        };

        setMessages((prev) => [...prev, userMessage]);
        setIsAsking(true);
        setError(null);

        try {
            const response = await askQuestion(question);
            const assistantMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response.answer,
                pages: response.pages,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Question failed.");
        } finally {
            setIsAsking(false);
        }
    };

    return {
        messages,
        isUploading,
        isAsking,
        error,
        pdfName,
        uploadSummary,
        handleUpload,
        handleAsk,
    };
};
