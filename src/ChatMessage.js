import React from 'react';

const ChatMessage = ({ message: { senderId, body, timestamp } }) => {
    const day = 86400000;

    const olderThanOneDay = timestamp => timestamp + day < Date.now()

    const formatDate = timestamp =>
        olderThanOneDay(timestamp)
            ? new Date(timestamp).toLocaleTimeString()
            : `Today at ${new Date(timestamp).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}`


    return (
        <div className="chatMessage">
            <p><b>{senderId}</b> {formatDate(timestamp)}</p>
            <p>{body}</p>
        </div>
    );
};

export default ChatMessage;
