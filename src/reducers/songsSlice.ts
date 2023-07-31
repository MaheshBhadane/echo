import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@/reducers/initialState";
import { findCurrentSongIndex } from "@/reducers/helper";
import { fetchSongs, searchSongs } from "@/reducers/songsThunk";

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
    prevSong: (state) => {
      const currentIndex = findCurrentSongIndex(state);
      if (currentIndex !== -1) {
        const prevIndex =
          (currentIndex - 1 + state.songs.length) % state.songs.length;
        state.currentSong = state.songs[prevIndex];
      }
    },
    nextSong: (state) => {
      const currentIndex = findCurrentSongIndex(state);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % state.songs.length;
        state.currentSong = state.songs[nextIndex];
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.fulfilled, (state, action: PayloadAction<Song[]>) => {
        state.status = "succeeded";
        state.songs = [...state.songs, ...action.payload];
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(searchSongs.pending, (state) => {
        state.status = "loading";
        state.songs = [];
      })
      .addCase(
        searchSongs.fulfilled,
        (state, action: PayloadAction<Song[]>) => {
          state.status = "succeeded";
          state.songs = action.payload;
        }
      )
      .addCase(searchSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  }
});

export const { selectSong, setPlaying, prevSong, nextSong } =
  songsSlice.actions;
export default songsSlice.reducer;
