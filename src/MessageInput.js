import React, { useState } from 'react';

const MessageInput = ({ addMessage }) => {
    const [message, setMessage] = useState("");

    const sendMessage = () => addMessage(message);

    return (
        <div className="messageInput">
            <input
                placeholder="Enter message"
                onChange={e => setMessage(e.target.value)}
            >
            </input>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default MessageInput;
