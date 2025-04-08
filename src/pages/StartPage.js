import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const handleSelect = (agentType) => {
    navigate(`/chat?agent=${agentType}`);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-300 to-purple-300">
      <h1 className="text-3xl font-bold mb-8 text-white">어떤 도움이 필요하신가요?</h1>
      <div className="space-y-4">
        <button
          onClick={() => handleSelect('simple')}
          className="px-8 py-4 bg-white text-indigo-700 rounded-xl shadow-md hover:bg-indigo-100"
        >
          간단 질문
        </button>
        <button
          onClick={() => handleSelect('lecture')}
          className="px-8 py-4 bg-white text-indigo-700 rounded-xl shadow-md hover:bg-indigo-100"
        >
          강의
        </button>
        <button
          onClick={() => handleSelect('project')}
          className="px-8 py-4 bg-white text-indigo-700 rounded-xl shadow-md hover:bg-indigo-100"
        >
          프로젝트 구체화
        </button>
      </div>
    </div>
  );
};

export default StartPage;
