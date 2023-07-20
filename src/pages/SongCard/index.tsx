import React, { useState } from "react";
import { Card, Group, Image, Text } from "@mantine/core";
import useStyles from "./style";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { fetchSongs } from "../../reducers/songsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Loader from "../../components/ui/Loader";
import AudioPlayer from "../../components/ui/AudioPlayer";
import { useDispatch } from "react-redux";

interface Song {
  trackId: number;
  previewUrl: string;
  artworkUrl100: string;
  trackName: string;
  artistName: string;
}

const SongCard: React.FC = () => {
  const { classes } = useStyles();
  const [currentPlayingSong, setCurrentPlayingSong] = useState<number | null>(
    null
  );
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);

  const { songs, status, error } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();

  React.useEffect(() => {
    dispatch(fetchSongs({ offset: 0 }));
  }, []);

  const handlePlayPause = (songId: number) => {
    setCurrentPlayingSong((prevSongId) => {
      if (prevSongId === songId) return null;
      return songId;
    });
  };

  if (status === "loading") {
    return (
      <div className={classes.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classes.cardContainer}>
      {songs?.length > 0 ? (
        songs.map((song: Song) => (
          <Card
            key={song?.trackId}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className={classes.card}
            onMouseEnter={() => setHoveredSong(song?.trackId)}
            onMouseLeave={() => setHoveredSong(null)}
          >
            <Card.Section>
              <Image
                src={song?.artworkUrl100}
                height={180}
                alt={song?.trackName}
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{song?.trackName}</Text>
            </Group>

            <Text
              size="sm"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {song?.artistName?.split(" ").slice(0, 2).join(" ")}
              <AudioPlayer
                previewUrl={song?.previewUrl}
                isPlaying={currentPlayingSong === song?.trackId}
                onPlayPause={() => handlePlayPause(song?.trackId)}
                isHovered={hoveredSong === song?.trackId}
              />
            </Text>
          </Card>
        ))
      ) : (
        <h3>No Songs Available..!!</h3>
      )}
    </div>
  );
};

export default SongCard;
