import React, { useContext } from 'react';
import { RoomContext } from '../Contexts/room';

const User = ({ user: { username, userId, connected } }) => {
    const [, setRoom] = useContext(RoomContext);

    const beginConversation = () => {
        setRoom({
            name: username,
            id: userId
        })
    };

    return (
        <span
            className={connected ? "online" : "offline"}
            onClick={beginConversation}
        >
            {username}
        </span>
    );
};

export default User;
