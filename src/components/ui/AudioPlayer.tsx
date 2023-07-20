import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface AudioPlayerProps {
  previewUrl: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  isHovered: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  previewUrl,
  isPlaying,
  onPlayPause,
  isHovered
}) => {
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
      <audio src={previewUrl} ref={audioRef} />
      {isHovered && (
      <Button size="sm" color="gray" onClick={onPlayPause}>
        <IconPlayerPlayFilled />
      </Button>
      )}
    </>
  );
};

export default AudioPlayer;
