import { createContext, VoidFunctionComponent } from 'react';

type Episode = {
  title: string,
  members: string,
  thumbnail: string,
  duration: number;
  url: string,
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  tooglePlay: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);
