import React, { useEffect, useState } from "react";
import useStyles from "@/pages/SongCardWrapper/style";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchSongs, selectSong, setPlaying } from "@/reducers/songsSlice";
import Loader from "@/components/ui/Loader";
import SongCard from "@/components/Card/SongCard";
import { Group, Image, Modal } from "@mantine/core";
import UserPic from '@/assets/musical-note.png';

const SongCardWrapper: React.FC = () => {
  const { classes } = useStyles();
  const { songs, status, error, currentSong, isPlaying } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const [offset, setOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight;
    if (isBottom) {
      setOffset((prevOffset) => prevOffset + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchSongs({ offset }));
  }, [dispatch, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModalOpen = (song: Song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
    if (!isPlaying || currentSong?.trackId !== song?.trackId) {
      dispatch(selectSong(song));
    }
    dispatch(setPlaying(!isPlaying || currentSong?.trackId !== song?.trackId));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setPlaying(!isPlaying));
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
    <>
      <div className={classes.cardContainer}>
        {songs?.length > 0 ? (
          songs.map((song: Song, i: number) => (
            <SongCard
              key={i}
              song={song}
              onClick={() => handleModalOpen(song)}
            />
          ))
        ) : (
          <h3>No Songs Available..!!</h3>
        )}
      </div>
      <Modal
        opened={isModalOpen}
        onClose={handleModalClose}
      >         
        {currentSong || selectedSong ? (
          <Group
            style={{
              alignItems: "center",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Image
              src={UserPic}
              alt="song"
              style={{
                height: "5rem",
                width: "5rem",
              }}
            />
            <h2>{(currentSong || selectedSong)?.trackName}</h2>
            <h3>{(currentSong || selectedSong)?.artistName}</h3>
            <Image
              src={(currentSong || selectedSong)?.artworkUrl100}
              alt="song"
              style={{
                height: "15rem",
                width: "15rem",
              }}
            />
          </Group>
        ) : (
          <div>No song selected.</div>
        )}
      </Modal>
    </>
  );
};

export default SongCardWrapper;

