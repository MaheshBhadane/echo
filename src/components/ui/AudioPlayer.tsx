import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const AudioPlayer: React.FC = () => {
  const { isPlaying, currentSong, volume } = useAppSelector(
    (state: RootState) => state.songs
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
  
    if (currentSong && isPlaying) {
      audioElement.src = currentSong.previewUrl;
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [currentSong, isPlaying]);
  
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
  
    audioElement.volume = volume / 100;
  }, [volume]);
  

  return (
    <>
      <audio src={currentSong?.previewUrl} ref={audioRef} autoPlay />
    </>
  );
};

export default AudioPlayer;
