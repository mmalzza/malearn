import React from 'react';

const ChatDisplay = ({ messages }) => {
  return (
    <div className="p-4 overflow-y-auto h-[70vh]">
      {messages.map((msg, idx) => (
        <div key={idx} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
          <div className="inline-block bg-gray-200 rounded p-2">
            <strong>{msg.sender === 'user' ? '🙋‍♂️' : '🤖'}:</strong> {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatDisplay;