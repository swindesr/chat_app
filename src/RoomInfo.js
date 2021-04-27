import React from 'react';

const RoomInfo = ({ roomName }) => {
    return (
        <div className="roomInfo">
            <h3>Room: {roomName}</h3>
        </div>
    );
};

export default RoomInfo;
