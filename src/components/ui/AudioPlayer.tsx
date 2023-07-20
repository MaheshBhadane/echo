import React, { useEffect, useRef } from "react";
import Button from "./Button";
import { IconPlayerPause, IconPlayerPlayFilled } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { selectSong, setPlaying } from "../../reducers/songsSlice";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

interface AudioPlayerProps {
  previewUrl: string;
  song:Song;
  isHovered: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  previewUrl,
  song,
  isHovered
}) => {
  const { isPlaying,currentSong } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch()
    const handleSongClick = () => {
        dispatch(selectSong(song));
        dispatch(setPlaying(!isPlaying))
    };

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
      <Button size="sm" color="gray" onClick={handleSongClick}>
       {song?.trackId === currentSong?.trackId && isPlaying?  <IconPlayerPause/>:<IconPlayerPlayFilled />}
      </Button>
      )}
    </>
  );
};

export default AudioPlayer;
