
export function findCurrentSongIndex(state: SongsState) {
  const currentSongId = state.currentSong?.trackId;
  return currentSongId !== undefined
    ? state.songs.findIndex((song) => song.trackId === currentSongId)
    : -1;
}
