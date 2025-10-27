import React from 'react';


export default function MessageList({ messages }) {
  return (
    <div
      style={{
        flex: 1,
        padding: '10px',
        overflowY: 'auto',
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
        height: '300px'
      }}
    >
      {messages.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#aaa' }}>
          No messages yet. Start the conversation!
        </p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              textAlign: 'left',
              background: '#E6E6FA',
              padding: '8px 10px',
              borderRadius: '8px',
              width: 'fit-content',
              maxWidth: '80%'
            }}
          >
            <strong>You:</strong> {msg}
          </div>
        ))
      )}
    </div>
  );
}
