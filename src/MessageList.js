import React from 'react';
import ChatMessage from './ChatMessage.js';

const MessageList = ({ messages }) => {
    return (
        <div className="messageList">
            {
                messages.length === 0 ?
                    <h4>No messages found</h4> :
                    messages.map(message =>
                        <ChatMessage
                            message={message}
                            key={message.id}
                        />
                    )
            }
        </div>
    );
};

export default MessageList;
