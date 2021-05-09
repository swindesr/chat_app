import React from 'react';
import Users from './Users.js';
// import Rooms from './Rooms.js';

const SocialPanel = ({ users }) => {
    return (
        <div id="socialContainer">
            <Users users={users} />
            {/* <Rooms rooms={rooms} /> */}
        </div>
    );
};

export default SocialPanel;
