import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// for fetching songs
export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async ({ offset }: { offset: number }) => {
    const response = await axios.get<iTunesApiResponse>(
      `https://itunes.apple.com/search/?term=top100&offset=${offset}&limit=20`
    );
    const data = response.data.results?.map((song) => {
      return {
        ...song,
        artworkUrl100: song?.artworkUrl100?.replace("100x100", "900x900")
      };
    });
    return data;
  }
);

// for searching songs
export const searchSongs = createAsyncThunk(
  "songs/searchSongs",
  async ({ trackName, offset }: { trackName: string; offset: number }) => {
    const searchTerm = trackName.length ? trackName : "top100";
    const response = await axios.get<iTunesApiResponse>(
      `https://itunes.apple.com/search/?term=${searchTerm}&offset=${offset}&limit=20`
    );
    const data = response.data.results?.map((song) => {
      return {
        ...song,
        artworkUrl100: song?.artworkUrl100?.replace("100x100", "900x900")
      };
    });
    return data;
  }
);
