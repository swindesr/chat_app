import React from 'react';

let room = {
    name: 'Personal',
    id: null
};
const RoomContext = React.createContext([room, x => x]);

export {
    RoomContext
};