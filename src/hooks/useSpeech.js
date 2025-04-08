import { useState } from 'react';

const useSpeech = (onResult) => {
  const [listening, setListening] = useState(false);
  let recognition;

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };
    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);
  };

  return { startListening, listening };
};

export default useSpeech;
