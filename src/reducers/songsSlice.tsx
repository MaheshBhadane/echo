import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface iTunesApiResponse {
  results: Song[];
}
interface SongsState {
  songs: Song[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchTerm: string;
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number; 
  currentProgress:number;
}


const initialState: SongsState = {
  songs: [],
  status: "idle",
  error: null,
  searchTerm: "",
  currentSong: null,
  isPlaying: false,
  volume: 50,
  currentProgress: 0
};

// for fetching songs
export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async ({ offset }: { offset: number }) => {
    const response = await axios.get<iTunesApiResponse>(
      `https://itunes.apple.com/search/?term=top100&offset=${offset}&limit=20`
    );
    const data = response.data.results?.map(song => {
      return {
        ...song,
        artworkUrl100: song?.artworkUrl100?.replace("100x100", "500x500")
      }
    })
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
    return response.data.results;
  }
);

function findCurrentSongIndex(state: SongsState) {
  const currentSongId = state.currentSong?.trackId;
  return currentSongId !== undefined
    ? state.songs.findIndex((song) => song.trackId === currentSongId)
    : -1;
}

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    selectSong: (state, action: PayloadAction<Song | null>) => {
      state.currentSong = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload; 
    },
    prevSong: (state) => {
      const currentIndex = findCurrentSongIndex(state);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + state.songs.length) % state.songs.length;
        state.currentSong = state.songs[prevIndex];
      }
    },
    nextSong: (state) => {
      const currentIndex = findCurrentSongIndex(state);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % state.songs.length;
        state.currentSong = state.songs[nextIndex];
      }
    },
    setCurrentProgress: (state, action: PayloadAction<number>) => {
      state.currentProgress = action.payload;
    },
  },
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

export const { selectSong, setPlaying, prevSong, nextSong, setVolume, setCurrentProgress } = songsSlice.actions;
export default songsSlice.reducer;