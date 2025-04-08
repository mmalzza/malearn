// src/api/openai.js
export const fetchGPT4oResponse = async (messages) => {
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const endpoint = 'https://8teamfoundrysw5516102114.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2025-01-01-preview';
  
    const formattedMessages = messages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: formattedMessages,
      }),
    });
  
    const data = await response.json();
    return data.choices?.[0]?.message?.content || '⚠️ 응답을 받지 못했습니다.';
  };
  