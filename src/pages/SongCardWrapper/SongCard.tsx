import { Card, Group, Image, Text } from '@mantine/core'
import { useState } from "react"
import AudioPlayer from '../../components/ui/AudioPlayer'
import { useDispatch } from 'react-redux'
import { selectSong } from '../../reducers/songsSlice'
import useStyles from './style'

const SongCard = ({
    song
}: { song: Song }) => {
    
    const { classes } = useStyles();
    const [hoveredSong, setHoveredSong] = useState<number | null>(null);
    
    // const [currentPlayingSong, setCurrentPlayingSong] = useState<number | null>(
    //     null
    //   );

    return (
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
                song={song}
                    previewUrl={song?.previewUrl}
                    isHovered={hoveredSong === song?.trackId}
                />
            </Text>
        </Card>
    )
}

export default SongCard