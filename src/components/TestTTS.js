import React from 'react';
import useTTS from '../hooks/useTTS';

const TestTTS = () => {
  const { speak } = useTTS();

  return (
    <button
      className="p-2 bg-blue-500 text-white rounded mt-4"
      onClick={() => speak('Hello! This is Azure Text to Speech test.')}
    >
      🔊 TTS 테스트
    </button>
  );
};

export default TestTTS;

