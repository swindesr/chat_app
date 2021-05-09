import { useEffect, useState } from "react";
import { socket } from "../Contexts/socket.js";
import uuidv4 from "uuid/v4";

const NEW_CHAT_MESSAGE_EVENT = "new message";

const useChat = ({ user: { username, userId } }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === userId,
            };
            setMessages((messages) => [incomingMessage, ...messages]);
        });

        return () => socket.disconnect();
    }, [userId]);

    const sendMessage = (message) => {
        socket.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: message,
            timestamp: Date.now(),
            id: uuidv4(),
            senderId: userId,
            author: username
        });
    };

    return [messages, sendMessage];
};

export default useChat;
