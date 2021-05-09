import React from 'react';
import User from './User.js';

const Users = ({ users }) => {
    return (
        <div id="usersContainer">
            <label className="socialPanelLabel">Users</label>
            <ul className="socialPanelList">
                {
                    users.length === 0
                        ? <li>No users online</li>
                        : users.map(user => <li key={user.userId}><User key={user.userId} user={user} /></li>)
                }
            </ul>
        </div>
    );
};

export default Users;
