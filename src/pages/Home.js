import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChatInput from '../components/ChatInput';
import ChatDisplay from '../components/ChatDisplay';
import Avatar from '../components/Avatar';
import useSpeech from '../hooks/useSpeech';
import useTTS from '../hooks/useTTS';
import { fetchGPT4oResponse } from '../api/openai';
import TestTTS from '../components/TestTTS';

const agentLabelMap = {
  simple: '간단 질문 아바타',
  lecture: '강의 아바타',
  project: '프로젝트 아바타',
};

const Home = () => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const { speak } = useTTS();

  const handleSendText = async (text) => {
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
  
    try {
      const aiResponse = await fetchGPT4oResponse(newMessages);
  
      // 응답 메시지 추가 및 TTS 실행
      setMessages((prev) => [...prev, { sender: 'bot', text: aiResponse }]);
      speak(aiResponse);
    } catch (err) {
      const errorMsg = 'GPT 응답 중 오류가 발생했습니다.';
      setMessages((prev) => [...prev, { sender: 'bot', text: errorMsg }]);
      speak(errorMsg);
    }
  };

  const { startListening } = useSpeech(handleSendText);

  // 쿼리 파라미터로 전달된 agent 텍스트 가져오기
  const searchParams = new URLSearchParams(location.search);
  const agentKey = searchParams.get('agent');
  const agentTitle = agentLabelMap[agentKey] || '기본 아바타';

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
          <button className="mb-4 p-2 bg-purple-500 text-white rounded">🎭 아바타 설정</button>
          <button className="mb-4 ml-2 p-2 bg-yellow-500 text-white rounded">🌐 Language</button>
        </div>
        <div className="flex flex-col items-center">
          <Avatar avatarUrl="/avatar.png" />
          <p className="mt-4 text-lg font-semibold">{agentTitle}</p>
        </div>
      </div>

      <div className="w-2/3 flex flex-col justify-between">
        <ChatDisplay messages={messages} />
        <ChatInput onSendText={handleSendText} onToggleMic={startListening} />
        <TestTTS />
      </div>
    </div>
  );
};

export default Home;