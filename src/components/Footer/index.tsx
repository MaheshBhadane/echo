import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { prevSong, setPlaying, nextSong } from "@/reducers/songsSlice";
import { Button, Group, Image } from "@mantine/core";
import {
  IconPlayerPause,
  IconPlayerPlayFilled,
  IconPlayerTrackPrevFilled,
  IconPlayerTrackNextFilled,
} from "@tabler/icons-react";
import { StyledFooter, StyledGroup } from "@/components/Footer/style";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "@/utils";
import { Volume2, VolumeX, Volume1 } from "lucide-react";
import userPic from "@/assets/musician.png";

const FooterPage = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, currentSong } = useAppSelector((state) => state.songs);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const audioRef = useRef<any>();

  useEffect(() => {
    if (!isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current.play();
    }
  }, [isPlaying]);

  const handlePrevSongClick = () => {
    dispatch(prevSong());
    dispatch(setPlaying(true));
  };

  const handleNextSongClick = () => {
    dispatch(nextSong());
    dispatch(setPlaying(true));
  };

  const handleFooterButtonClick = () => {
    dispatch(setPlaying(!isPlaying));
  };

  useEffect(() => {
    if (currentSong) {
      if (audioRef.current) audioRef.current.src = currentSong.previewUrl;
    }
  }, [currentSong]);

  return (
    <StyledFooter height={80} withBorder={false}>
      <Group style={{ alignItems: "center", gap: "1rem" }}>
        <Image
          src={currentSong ? currentSong?.artworkUrl100 : userPic}
          alt="song"
          style={{
            height: "3rem",
            width: "3rem",
          }}
        />
        <div>
          <h6>{currentSong?.trackName}</h6>
          <h6>{currentSong?.artistName}</h6>
        </div>
      </Group>

      <audio
        id="audio1"
        src={currentSong?.previewUrl}
        ref={audioRef}
        autoPlay
        onTimeUpdate={() => setCurrentTime(audioRef?.current?.currentTime)}
        onDurationChange={() => setDuration(audioRef.current.duration)}
        onEnded={() => {
          setCurrentTime(audioRef?.current?.duration);
          dispatch(setPlaying(false));
        }}
      />
      <StyledGroup>
        <Group>
          <Button
            variant="subtle"
            color="dark"
            size="lg"
            onClick={handlePrevSongClick}
          >
            <IconPlayerTrackPrevFilled size={"30px"} />
          </Button>
          <Button
            variant="subtle"
            color="dark"
            size="lg"
            onClick={handleFooterButtonClick}
          >
            {isPlaying ? (
              <IconPlayerPause size={"40px"} />
            ) : (
              <IconPlayerPlayFilled size={"40px"} />
            )}
          </Button>
          <Button
            variant="subtle"
            color="dark"
            size="lg"
            onClick={handleNextSongClick}
          >
            <IconPlayerTrackNextFilled size={"30px"} />
          </Button>
        </Group>
        <Group style={{ alignItems: "center" }}>
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            value={currentTime}
            max={duration}
            step="0.01"
            onChange={(e) => {
              audioRef.current.currentTime = parseFloat(e.target.value);
              setCurrentTime(parseFloat(e.target.value));
            }}
          />
          <span>{formatTime(duration)}</span>
        </Group>
      </StyledGroup>

      <Group style={{ alignItems: "center", gap: "1rem" }}>
        {volume <= 1 && volume > 0.5 ? (
          <Volume2 color="black" size={25} onClick={() => setVolume(0.5)} />
        ) : null}
        {volume <= 0.5 && volume > 0 ? (
          <Volume1 color="black" size={25} onClick={() => setVolume(1)} />
        ) : null}
        {!volume ? (
          <VolumeX color="black" size={25} onClick={() => setVolume(0)} />
        ) : null}
        <input
          type="range"
          step="any"
          value={volume}
          min={0}
          max={1}
          onChange={(event) => {
            audioRef.current.volume = event.target.value;
            setVolume(Number(event.target.value));
          }}
        />
      </Group>
    </StyledFooter>
  );
};

export default FooterPage;
