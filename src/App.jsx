import React,{ useState } from 'react';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import InputBar from './components/InputBar';

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (msg) => {
    setMessages([...messages, msg]);
  };

  return (
    <div
      style={{
        width: '400px',
        margin: '50px auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        height: '450px',
        backgroundColor: '#fff'
      }}
    >
      <ChatHeader />
      <MessageList messages={messages} />
      <InputBar onSend={handleSend} />
    </div>
  );
}
