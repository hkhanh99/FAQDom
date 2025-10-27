import React, { useState } from 'react';

export default function InputBar({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
        borderTop: '1px solid #ddd',
        backgroundColor: '#fff'
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        onClick={handleSend}
        style={{
          marginLeft: '8px',
          backgroundColor: '#6C63FF',
          color: 'white',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Send
      </button>
    </div>
  );
}
