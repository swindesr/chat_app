import React, { useState } from 'react';

const MessageInput = ({ sendMessage, user }) => {
    const [message, setMessage] = useState("");

    const attemptSendMessage = () =>
        message.length
            ? sendMessage(message)
            : null

    return (
        <div className="messageInput">
            <input
                placeholder="Enter message"
                onChange={e => setMessage(e.target.value)}
                value={message}
            >
            </input>
            <button onClick={attemptSendMessage}>Send</button>
        </div>
    );
};

export default MessageInput;
