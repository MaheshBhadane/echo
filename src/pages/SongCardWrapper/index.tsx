import React, { useEffect, useState } from "react";
import useStyles from "@/pages/SongCardWrapper/style";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchSongs } from "@/reducers/songsSlice";
import Loader from "@/components/ui/Loader";
import SongCard from "@/components/Card/SongCard";

const SongCardWrapper: React.FC = () => {
  const { classes } = useStyles();
  const { songs, status, error } = useAppSelector(
    (state: RootState) => state.songs
  );
  const dispatch = useDispatch<ThunkDispatch<RootState, null, any>>();
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight;
    if (isBottom) {
      setOffset(prevOffset => prevOffset + 1);
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
    </div>
  );
};

export default SongCardWrapper;
