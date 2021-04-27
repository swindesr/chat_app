import React from 'react';

const ChatMessage = ({ message: { author, text } }) => {
    return (
        <div className="chatMessage">
            <p><b>{author}</b></p>
            <p>{text}</p>
        </div>
    );
};

export default ChatMessage;
