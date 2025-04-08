import React, { useState } from 'react';

const ChatInput = ({ onSendText, onToggleMic }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendText(input);
      setInput('');
    }
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <button onClick={onToggleMic} className="bg-blue-500 text-white p-2 rounded">
        🎤
      </button>
      <input
        type="text"
        placeholder="텍스트를 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow border rounded p-2"
      />
      <button onClick={handleSend} className="bg-green-500 text-white p-2 rounded">
        전송
      </button>
    </div>
  );
};

export default ChatInput;
