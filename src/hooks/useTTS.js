const useTTS = () => {
  const speak = async (text) => {
    const apiKey = process.env.REACT_APP_AZURE_TTS_KEY;;
    const region = process.env.REACT_APP_AZURE_TTS_REGION;

    const endpoint = `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`;

    const headers = {
      'Ocp-Apim-Subscription-Key': apiKey,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3',
    };

    const ssml = `
      <speak version='1.0' xml:lang='en-US'>
        <voice xml:lang='en-US' xml:gender='Female' name='en-US-JennyNeural'>
          ${text}
        </voice>
      </speak>`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: ssml,
      });

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    } catch (err) {
      console.error('🔊 TTS 오류:', err);
    }
  };

  return { speak };
};

export default useTTS;