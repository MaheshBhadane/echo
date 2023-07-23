import React from "react";
import { Group, Image } from "@mantine/core";
import UserPic from "@/assets/musical-note.png";
import Button from "@/components/ui/Button";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

const SongModal: React.FC<SongModalProps> = ({
  song,
  onPlayPauseClick,
}) => {
    const {currentSong, isPlaying } = useAppSelector(
        (state: RootState) => state.songs
      );
  return (
    <>
      <Group
        style={{
          alignItems: "center",
          flexDirection: "column",
          gap: "0.5",
        }}
      >
        <Image
          src={UserPic}
          alt="song"
          style={{
            height: "4rem",
            width: "4rem",
            alignItems: "center",
            flexDirection: "column",
          }}
        />
      </Group>
      <Group>
        <h3 style={{ margin: "0" }}>Track Name: {song?.trackName}</h3>
        <h4 style={{ margin: "0" }}>Artist Name: {song?.artistName}</h4>
        <h4 style={{ margin: "0" }}>
          Collection Name: {song?.collectionName}
        </h4>
        <h4 style={{ margin: "0" }}>
          Released on: {song?.releaseDate?.split("T")[0].replace(/-/g, "-")}
        </h4>
      </Group>

      <Group
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "20px",
        }}
      >
        <Image
          src={song?.artworkUrl100}
          alt="song"
          style={{
            height: "15rem",
            width: "15rem",
          }}
        />
        <Button size="sm" color="gray" onClick={onPlayPauseClick}>
          {currentSong?.trackId === song?.trackId && isPlaying ? (
            <IconPlayerPauseFilled />
          ) : (
            <IconPlayerPlayFilled />
          )}
        </Button>
      </Group>
    </>
  );
};

export default SongModal;
