import { Card, Flex, Group, Image, Text } from '@mantine/core'
import { useState } from "react"
import useStyles from './style'
import Button from '../../components/ui/Button'
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { selectSong, setPlaying } from '../../reducers/songsSlice'
import { useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store'

const SongCard = ({
    song
}: { song: Song }) => {

    const { classes } = useStyles();
    const [hoveredSong, setHoveredSong] = useState<number | null>(null);
    const { isPlaying, currentSong } = useAppSelector(
        (state: RootState) => state.songs
    );
    const dispatch = useDispatch()

    const handleSongClick = () => {
        if (!isPlaying) {
            dispatch(selectSong(song));
            dispatch(setPlaying(true))
        }
        if (isPlaying && currentSong?.trackId === song?.trackId) {
            dispatch(setPlaying(false))
        }
        else {
            dispatch(selectSong(song));
        }
    }

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
                <Flex direction={'column'}>
                    <Text weight={500}>{song?.trackName}</Text>
                    <Text
                        size="sm"
                    >
                        {song?.artistName?.split(" ").slice(0, 2).join(" ")}

                    </Text>
                </Flex>
                {hoveredSong === song?.trackId &&
                    <Button size="sm" color="gray" onClick={handleSongClick}>
                        {song?.trackId === currentSong?.trackId && isPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
                    </Button>
                }
            </Group>
        </Card>
    )
}

export default SongCard