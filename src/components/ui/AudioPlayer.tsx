import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const AudioPlayer: React.FC = () => {
  const { isPlaying, currentSong } = useAppSelector(
    (state: RootState) => state.songs
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio src={currentSong?.previewUrl} ref={audioRef} autoPlay />
    </>
  );
};

export default AudioPlayer;
