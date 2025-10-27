import React, { useState } from 'react';

export default function InputBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSearch(input);
  };

  return (
    <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ddd' }}>
      <input
        type="text"
        placeholder="Type keyword (e.g. react, state, props)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleSend}
        style={{
          marginLeft: '8px',
          padding: '8px 12px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#6C63FF',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </div>
  );
}
