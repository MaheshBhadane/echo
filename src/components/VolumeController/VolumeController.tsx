import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setVolume } from "../../reducers/songsSlice";
import { Button, Slider, Text } from "@mantine/core";
import { IconVolume2, IconVolume3 } from "@tabler/icons-react";

const VolumeController: React.FC = () => {
  const dispatch = useAppDispatch();

  const { volume } = useAppSelector((state: RootState) => state.songs);

  const [isMuted, setIsMuted] = useState(volume === 0);

  const handleVolumeChange = (newValue: number) => {
    setIsMuted(newValue === 0);
    dispatch(setVolume(newValue));
  };

  const handleMuteButtonClick = () => {
    setIsMuted((prevMuted) => !prevMuted);
    dispatch(setVolume(isMuted ? 50 : 0)); 
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="" color='dark' onClick={handleMuteButtonClick}>
        {isMuted ? <IconVolume3/> : <IconVolume2/>}
      </Button>
      <Slider
        min={0}
        max={100}
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        style={{ width: "100px", marginRight: "10px" }}
        disabled={isMuted}
        color='dark'
      />
      <Text>{isMuted ? '0%' : `${volume}%`}</Text>
    </div>
  );
};

export default VolumeController;
