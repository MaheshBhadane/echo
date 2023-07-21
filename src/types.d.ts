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
interface Song {
    trackId: number;
    previewUrl: string;
    artworkUrl100: string;
    trackName: string;
    artistName: string;
    duration: number;
  }

interface SongCardProps {
    song: Song;
    onClick: () => void;
}

interface Inputs {
  email: string;
  password: string;
}

