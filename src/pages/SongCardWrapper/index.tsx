import React, { useState } from "react";
import { Card, Group, Image, Text } from "@mantine/core";
import useStyles from "./style";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { fetchSongs, selectSong } from "../../reducers/songsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import Loader from "../../components/ui/Loader";
import AudioPlayer from "../../components/ui/AudioPlayer";
import { useDispatch } from "react-redux";
import SongCard from "./SongCard";

interface Song {
  trackId: number;
  previewUrl: string;
  artworkUrl100: string;
  trackName: string;
  artistName: string;
}

const SongCardWrapper: React.FC = () => {
  const { classes } = useStyles();


  const { songs, status, error } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();


 
  React.useEffect(() => {
    dispatch(fetchSongs({ offset: 0 }));
  }, []);

  // const handlePlayPause = (songId: number) => {
  //   setCurrentPlayingSong((prevSongId) => {
  //     if (prevSongId === songId) return null;
  //     return songId;
  //   });
  // };

 

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
        songs.map((song: Song,i:number) => (
          <SongCard key={i} song={song}/>
        ))
      ) : (
        <h3>No Songs Available..!!</h3>
      )}
    </div>
  );
};

export default SongCardWrapper;
