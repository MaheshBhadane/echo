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
}

const initialState: SongsState = {
  songs: [],
  status: "idle",
  error: null,
};

export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async ({ offset }: { offset: number }) => {
    const response = await axios.get<iTunesApiResponse>(
      `https://itunes.apple.com/search/?term=top100&offset=${offset}&limit=20`
    );
    return response.data.results ;
  }
);

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs?.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongs?.fulfilled, (state, action: PayloadAction<Song[]>) => {
        state.status = "succeeded";
        state.songs = action.payload;
      })
      .addCase(fetchSongs?.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export default songsSlice.reducer;
