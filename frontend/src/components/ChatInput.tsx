import { useState, type FormEvent } from "react";

interface ChatInputProps {
    onSubmit: (value: string) => Promise<void> | void;
    disabled: boolean;
}

const ChatInput = ({ onSubmit, disabled }: ChatInputProps) => {
    const [value, setValue] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) {
            return;
        }

        await onSubmit(trimmed);
        setValue("");
    };

    return (
        <form className="chat-input" onSubmit={handleSubmit}>
            <textarea
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Ask about the uploaded document..."
                rows={3}
                disabled={disabled}
            />
            <button type="submit" className="primary-btn" disabled={disabled}>
                {disabled ? "Thinking..." : "Send"}
            </button>
        </form>
    );
};

export default ChatInput;
