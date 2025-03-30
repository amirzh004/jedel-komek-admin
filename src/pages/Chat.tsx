import React, { useState, useRef, useEffect, FormEvent } from 'react';
import './../App.css';

interface ChatMessage {
    id: string;
    text: string;
    time: string;
    isUser: boolean;
}

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            text: 'Здравствуйте, чем я могу помочь?',
            time: '10:00',
            isUser: false,
        },
    ]);
    const [inputText, setInputText] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            text: inputText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isUser: true,
        };
        setMessages([...messages, newMessage]);
        setInputText('');
    };

    // Scroll to the bottom when messages change.
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-container">
            <header className="chat-header">
                <h1 style={{color: 'white'}}>Чат</h1>
            </header>
            <div className="chat-messages">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`chat-message ${message.isUser ? 'user-message' : 'other-message'}`}
                    >
                        <div className="message-text">{message.text}</div>
                        <div className="message-time">{message.time}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form className="chat-input" onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Введите сообщение..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default ChatInterface;
