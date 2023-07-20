import { Group } from "@mantine/core";
import { IconPlayerPause, IconPlayerPlayFilled, IconPlayerTrackPrevFilled, IconPlayerTrackNextFilled } from "@tabler/icons-react";
import { prevSong, nextSong, setPlaying } from '../../reducers/songsSlice';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import VolumeController from "../VolumeController/VolumeController";
import Button from "../ui/Button";
import AudioPlayer from "../ui/AudioPlayer";
import { StyledFooter } from "./style";

const FooterPage = () => {
  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.songs);

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

  return (
    <StyledFooter height={70} withBorder={false}>
      <Group style={{ flex: 1, justifyContent: 'center' }}>
        <Button variant="subtle" color='dark' size="lg" onClick={handlePrevSongClick}>
          <IconPlayerTrackPrevFilled size={'30px'} />
        </Button>
        <Button variant="subtle" color='dark' size="lg" onClick={handleFooterButtonClick}>
          {isPlaying ? <IconPlayerPause size={'40px'} /> : <IconPlayerPlayFilled size={'40px'} />}
        </Button>
        <Button variant="subtle" color='dark' size="lg" onClick={handleNextSongClick}>
          <IconPlayerTrackNextFilled size={'30px'} />
        </Button>
      </Group>
      <VolumeController /> 
      <AudioPlayer />
    </StyledFooter>
  );
}

export default FooterPage;
