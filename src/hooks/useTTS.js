const useTTS = () => {
  const speak = async (text) => {
    try {
      //테스트용: 임시 MP3 파일로 대체
      const audio = new Audio('/sample.mp3');
      await audio.play();

      //실제 구현 시에는 Azure TTS API 결과 URL을 여기에 넣어야 합니다
    } catch (err) {
      console.error('TTS 재생 오류:', err);
    }
  };

  return { speak };
};

export default useTTS;

