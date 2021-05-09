import React, { useState } from 'react';
import ChatRoom from './Components/ChatRoom.js';
import SocialPanel from './Components/SocialPanel.js';
import Login from './Components/Login.js';
import useUser from './Hooks/useUser.js';
import useUsers from './Hooks/useUsers.js';
import { SocketContext, socket } from './Contexts/socket';
import { RoomContext } from './Contexts/room';

const App = () => {
  const [user, login] = useUser();
  const [users] = useUsers();
  const roomHook = useState(null);

  return (
    <RoomContext.Provider value={roomHook}>
      <SocketContext.Provider value={socket}>
        <div id="wrapper">
          {
            user
              ? (
                <>
                  <SocialPanel users={users} />
                  <ChatRoom user={user} />
                </>
              )
              : <Login login={login} />}
        </div>
      </SocketContext.Provider>
    </RoomContext.Provider>
  );
};

export default App;
