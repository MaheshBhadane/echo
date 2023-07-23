import React, { useEffect, useState } from "react";
import useStyles from "@/components/SongCardWrapper/style";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchSongs, selectSong, setPlaying } from "@/reducers/songsSlice";
import Loader from "@/components/ui/Loader";
import SongCard from "@/components/Card/SongCard";
import { Modal } from "@mantine/core";
import SongModal from "@/components/SongModal";

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
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSongClick = () => {
    if (!isPlaying || currentSong?.trackId !== selectedSong?.trackId) {
      dispatch(selectSong(selectedSong));
    }
    dispatch(
      setPlaying(!isPlaying || currentSong?.trackId !== selectedSong?.trackId)
    );
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
      <Modal opened={isModalOpen} onClose={handleModalClose}>
        {selectedSong ? (
          <SongModal
            song={selectedSong}
            onPlayPauseClick={handleSongClick}
          />
        ) : (
          <div>No song selected.</div>
        )}
      </Modal>
    </>
  );
};

export default SongCardWrapper;
