import type { Message } from "../types/chat";
import SourceBadge from "./SourceBadge.tsx";

interface ChatMessageProps {
    message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <article className={`message-row ${message.role}`}>
            <div className={`message-bubble ${message.role}`}>
                <div className="message-meta">{message.role === "user" ? "You" : "Assistant"}</div>
                <p className="message-text">{message.content}</p>
                {message.pages && message.pages.length > 0 ? <SourceBadge pages={message.pages} /> : null}
            </div>
        </article>
    );
};

export default ChatMessage;
