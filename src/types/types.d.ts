/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-unused-vars */
interface iTunesApiResponse {
  results: Song[];
}
interface SongsState {
  songs: Song[];
  status?: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
  searchTerm?: string;
  currentSong?: Song | null;
  isPlaying?: boolean;
}
interface Song {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
  copyright: string;
  description: string;
}

interface SongCardProps {
  song: Song;
  onClick: () => void;
  currentSong?: Song | null;
  isPlaying?: boolean;
}

interface FooterProps {
  currentSong?: Song | null;
  isPlaying?: boolean;
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
  currentSong?: Song | null;
  isPlaying?: boolean;
}
