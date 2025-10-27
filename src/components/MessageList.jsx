import React from 'react';

export default function MessageList({ faqs, status }) {
  if (status === 'loading') return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (status === 'error') return <p style={{ textAlign: 'center', color: 'red' }}>Error loading FAQs.</p>;
  if (status === 'empty') return <p style={{ textAlign: 'center' }}>No related FAQs found.</p>;
  if (status === 'idle') return <p style={{ textAlign: 'center' }}>Type a keyword (e.g. login, mobile, submit)...</p>;

  return (
    <div style={{ padding: '10px', backgroundColor: '#f9f9f9', minHeight: '260px' }}>
      {faqs.map((item, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: '12px',
            background: '#E6E6FA',
            padding: '10px',
            borderRadius: '6px',
            borderLeft: '4px solid #6C63FF'
          }}
        >
          <div style={{ fontSize: '12px', color: '#6C63FF', fontWeight: 'bold' }}>
            {item.topic || 'General'}
          </div>
          <strong>Q: {item.question}</strong>
          <p style={{ margin: '4px 0 0' }}>A: {item.answer}</p>
        </div>
      ))}
    </div>
  );
}
