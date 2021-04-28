import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import uuidv4 from "uuid/v4";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(SOCKET_SERVER_URL);

        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        });

        return () => socketRef.current.disconnect();
    }, []);

    const sendMessage = (message) => {
        socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: message,
            timestamp: Date.now(),
            id: uuidv4(),
            senderId: socketRef.current.id,
        });
    };

    return { messages, sendMessage };
};

export default useChat;
