import React from "react";
import useStyles from "./style";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { fetchSongs } from "../../reducers/songsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Loader from "../../components/ui/Loader";
import { useDispatch } from "react-redux";
import SongCard from "./SongCard";
import AudioPlayer from "../../components/ui/AudioPlayer";

const SongCardWrapper: React.FC = () => {
  const { classes } = useStyles();
  const { songs, status, error } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();

  React.useEffect(() => {
    dispatch(fetchSongs({ offset: 0 }));
  }, []);

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
        songs.map((song: Song, i: number) => <SongCard key={i} song={song} />)
      ) : (
        <h3>No Songs Available..!!</h3>
      )}
      <AudioPlayer />
    </div>
  );
};

export default SongCardWrapper;
