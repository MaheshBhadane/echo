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
    collectionName: string;
    releaseDate: string;
  }

interface SongCardProps {
    song: Song;
    onClick: () => void;
}

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

interface Inputs {
  email: string;
  password: string;
}

interface SongModalProps {
  song: Song | null;
  onPlayPauseClick: () => void;
}