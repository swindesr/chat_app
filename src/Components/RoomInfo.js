import React from 'react';
import { RoomContext } from '../Contexts/room';

const RoomInfo = () => {
    return (
        <RoomContext.Consumer>
            {([room]) => (
                <div className="roomInfo">
                    <h3>{room.name}</h3>
                </div>
            )}
        </RoomContext.Consumer>
    );
};

export default RoomInfo;
