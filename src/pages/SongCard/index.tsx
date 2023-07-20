import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, Group, Image, Text } from "@mantine/core";
import useStyles from "./style";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { fetchSongs } from "../../reducers/songsSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";
import Loader from "../../components/ui/Loader";

const SongCard = () => {
  const { classes } = useStyles();

  const { songs, status, error } = useAppSelector((state: RootState) => state.songs);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchSongs({offset:0}));
  }, [dispatch]);

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
      songs.map((song) => (
        <Card
          key={song?.trackId}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className={classes.card}
        >
          <Card.Section>
            <Image src={song?.artworkUrl100} height={160} alt={song?.trackName} />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{song?.trackName}</Text>
          </Group>

          <Text size="sm" color="dimmed">
            {song?.artistName}
          </Text>
        </Card>
      ))
      ) : (
        <div>No Songs Available..!!</div>
      )}
    </div>
  );
};

export default SongCard;
