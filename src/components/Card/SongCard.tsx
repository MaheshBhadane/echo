import { Button, Card, Flex, Group, Image, Text } from "@mantine/core";
import { useState } from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { selectSong, setPlaying } from "@/reducers/songsSlice";
import useStyles from "@/pages/SongCardWrapper/style";

const SongCard: React.FC<SongCardProps> = ({ song, onClick }) => {
  const { classes } = useStyles();
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);
  const { isPlaying, currentSong } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch();

  const handleSongClick = () => {
    if (!isPlaying || currentSong?.trackId !== song?.trackId) {
      dispatch(selectSong(song));
    }
    dispatch(setPlaying(!isPlaying || currentSong?.trackId !== song?.trackId));
  };

  return (
    <div onClick={onClick}>
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
          <Image src={song?.artworkUrl100} height={180} alt={song?.trackName} />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Flex direction={"column"}>
            <Text weight={500}>
              {song?.trackName?.split(" ").slice(0, 4).join(" ")}
            </Text>
            <Text size="sm">
              {song?.artistName?.split(" ").slice(0, 2).join(" ")}
            </Text>
          </Flex>
          {hoveredSong === song?.trackId && (
            <Button size="sm" color="gray" onClick={handleSongClick}>
              {song?.trackId === currentSong?.trackId && isPlaying ? (
                <IconPlayerPauseFilled />
              ) : (
                <IconPlayerPlayFilled />
              )}
            </Button>
          )}
        </Group>
      </Card>
    </div>
  );
};

export default SongCard;
