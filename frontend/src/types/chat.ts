export interface ChatResponse {
    answer: string;
    question?: string;
    pages?: number[];
}

export interface UploadResponse {
    message: string;
    filename: string;
    pages: number;
    chunks: number;
}

export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    pages?: number[];
}