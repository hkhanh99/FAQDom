import React, { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import InputBar from './components/InputBar';
import useFAQs from './hook/useFAQs';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const { faqs, status } = useFAQs(keyword);

  return (
    <div
      style={{
        width: '420px',
        margin: '50px auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      <ChatHeader />
      <MessageList faqs={faqs} status={status} />
      <InputBar onSearch={(kw) => setKeyword(kw)} />
    </div>
  );
}
