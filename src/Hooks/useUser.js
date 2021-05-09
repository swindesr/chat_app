import { useState, useEffect } from 'react';
import { socket } from '../Contexts/socket.js';

const useUser = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const sessionId = localStorage.getItem("sessionId");

        if (sessionId) {
            socket.auth = { sessionId };
            socket.connect();
        }

        socket.on("session", ({ sessionId, userId, username }) => {
            socket.auth = { sessionId };
            localStorage.setItem("sessionId", sessionId);
            setUser({ userId, username });
        });

        return () => socket.disconnect();
    }, []);

    const login = (username) => {
        socket.auth = { username }
        socket.connect();
    };

    return [user, login];
};

export default useUser;
