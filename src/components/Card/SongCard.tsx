import { CardSection, Flex, Group, Image, Tooltip } from "@mantine/core";
import { useState } from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { selectSong, setPlaying } from "@/reducers/songsSlice";
import useStyles from "@/components/SongCardWrapper/style";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Card from "@/components/ui/Card";

const SongCard: React.FC<SongCardProps> = ({
  song,
  onClick,
  isPlaying,
  currentSong
}) => {
  const { classes } = useStyles();
  const [hoveredSong, setHoveredSong] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleSongClick = () => {
    if (!isPlaying || currentSong?.trackId !== song?.trackId) {
      dispatch(selectSong(song));
    }
    dispatch(setPlaying(!isPlaying || currentSong?.trackId !== song?.trackId));
  };

  return (
    <Card
      key={song?.trackId}
      shadow="md"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
      onMouseEnter={() => setHoveredSong(song?.trackId)}
      onMouseLeave={() => setHoveredSong(null)}
    >
      <CardSection onClick={onClick}>
        <Tooltip label={song?.trackName}>
          <Image
            src={song?.artworkUrl100}
            height={180}
            alt={song?.trackName}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      </CardSection>
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
          <Button variant="gradient" size="sm" onClick={handleSongClick}>
            {song?.trackId === currentSong?.trackId && isPlaying ? (
              <IconPlayerPauseFilled />
            ) : (
              <IconPlayerPlayFilled />
            )}
          </Button>
        )}
      </Group>
    </Card>
  );
};

export default SongCard;
