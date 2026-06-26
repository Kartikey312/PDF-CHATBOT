import axios from "axios";
import type { ChatResponse, UploadResponse } from "../types/chat";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const uploadPdf = async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post<UploadResponse>("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};

export const askQuestion = async (question: string): Promise<ChatResponse> => {
    const response = await api.post<ChatResponse>("/ask", { question });
    return response.data;
};

export default api;