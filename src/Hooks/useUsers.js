import { useState, useEffect } from 'react';
import { socket } from '../Contexts/socket'

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('users', (users) => {
            setUsers(users);
        });

        socket.on("user connected", (newUser) => {
            setUsers((prev) => prev
                .some(user => user.userId === newUser.userId)
                ? prev.map(user =>
                    user.userId === newUser.userId ? { ...user, connected: true } : user
                )
                : [...prev, newUser]
            );
        });

        socket.on("user disconnected", (userId) => {
            setUsers((prev) => prev.map(user =>
                user.userId === userId ? { ...user, connected: false } : user
            ));
        });

        return () => socket.disconnect();
    }, []);

    return [users, setUsers];
};

export default useUsers;
