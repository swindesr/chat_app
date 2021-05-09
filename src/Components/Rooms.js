import React from 'react';

const Rooms = ({ rooms }) => {
    return (
        <div id="roomsContainer">
            <label className="socialPanelLabel">Rooms</label>
            <ul className="socialPanelList">
                {
                    rooms.length === 0
                        ? <li>There are no chat rooms</li>
                        : rooms.map(room => <li key={room}>{room}</li>)}
            </ul>
        </div>
    );
};

export default Rooms;
