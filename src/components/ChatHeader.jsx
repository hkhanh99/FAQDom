import React from 'react';

export default function ChatHeader() {
  return (
    <header
      style={{
        backgroundColor: '#6C63FF',
        color: 'white',
        padding: '12px',
        textAlign: 'center',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
      }}
    >
      <h2 style={{ margin: 0 }}>UniFAQ Assistant</h2>
    </header>
  );
}
