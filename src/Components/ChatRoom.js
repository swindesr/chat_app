import RoomInfo from './RoomInfo.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';
import useChat from '../Hooks/useChat';
import { RoomContext } from '../Contexts/room'

const ChatRoom = (user) => {
  const [messages, sendMessage] = useChat(user);

  return (
    <RoomContext.Consumer>
      {([room]) => (
        <div id="chatContainer">
          {
            !room
              ? (
                <div id="noRoomSplash">
                  <h3 className="centered">Join a room to begin chatting.</h3>
                </div>
              )
              : (
                <>
                  <RoomInfo />
                  <MessageList messages={messages} />
                  <MessageInput sendMessage={sendMessage} />
                </>
              )
          }
        </div>
      )}
    </RoomContext.Consumer>
  );
}

export default ChatRoom;
