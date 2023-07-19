import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface iTunesApiResponse {
  results: Song[];
}

interface Song {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
}

interface SongsState {
  songs: Song[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchTerm: string;
}

const initialState: SongsState = {
  songs: [],
  status: "idle",
  error: null,
  searchTerm: "", 
};

// for fetching songs
export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async ({ offset }: { offset: number }) => {
    const response = await axios.get<iTunesApiResponse>(
      `https://itunes.apple.com/search/?term=top100&offset=${offset}&limit=20`
    );
    return response.data.results;
  }
);

// for searching songs
export const searchSongs = createAsyncThunk(
  "songs/searchSongs",
  async ({ trackName, offset }: { trackName: string; offset: number }) => {
    const response = await axios.get<iTunesApiResponse>(
      `https://itunes.apple.com/search/?term=${trackName}&offset=${offset}&limit=20`
    );
    return response.data.results;
  }
);

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.fulfilled, (state, action: PayloadAction<Song[]>) => {
        state.status = "succeeded";
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(searchSongs.pending, (state) => {
        state.status = "loading";
        state.songs = []; 
      })
      .addCase(searchSongs.fulfilled, (state, action: PayloadAction<Song[]>) => {
        state.status = "succeeded";
        state.songs = action.payload;
      })
      .addCase(searchSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export default songsSlice.reducer;
