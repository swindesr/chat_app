import { useState } from 'react';
import './App.css';
import RoomInfo from './RoomInfo.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';
import useChat from './useChat';

const App = () => {
  const [user, setUser] = useState("Sam");
  const [room, setRoom] = useState("KDOC");
  // const [messages, setMessages] = useState([
  //   { text: "hello", author: "Big Joe", timestamp: 1619496676263, id: uuidv4() },
  //   { text: "world", author: "Lug", timestamp: 1619496678019, id: uuidv4() }
  // ]);
  const { messages, sendMessage } = useChat(room);

  return (
    <div className="wrapper">
      <RoomInfo roomName={room} />
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} user={user} />
    </div>
  );
}

export default App;
