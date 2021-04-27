import { useState } from 'react';
import './App.css';
import RoomInfo from './RoomInfo.js';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';

const App = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("KDOC");
  const [messages, setMessages] = useState([{ text: "hello", author: "Big Joe" }, { text: "world", author: "Lug" }]);

  const handleRoomChange = () => "";
  const handleNameChange = () => "";
  const listen = () => messages;
  const addMessage = (text) => setMessages([...messages, { text, author: "UserA" }]);

  return (
    <div className="wrapper">
      <RoomInfo roomName={room} />
      <MessageList messages={listen()} />
      <MessageInput addMessage={addMessage} />
    </div>
  );
}

export default App;
