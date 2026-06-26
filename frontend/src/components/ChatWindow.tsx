import type { Message } from "../types/chat";
import ChatMessage from "./ChatMessage.tsx";
import EmptyState from "./EmptyState.tsx";
import LoadingBubble from "./LoadingBubble.tsx";

interface ChatWindowProps {
    messages: Message[];
    isAsking: boolean;
}

const ChatWindow = ({ messages, isAsking }: ChatWindowProps) => {
    return (
        <section className="chat-window">
            {messages.length === 0 ? (
                <EmptyState />
            ) : (
                messages.map((message) => <ChatMessage key={message.id} message={message} />)
            )}
            {isAsking ? <LoadingBubble /> : null}
        </section>
    );
};

export default ChatWindow;
