export interface InitialStateTypes {
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  bgaProfile: string;
  boardgamegreek: string;
  collectionGames: {
    id: number;
    game: string;
    release: number;
    playerCount: string;
    playTime: number;
    weight: number;
    rating: number;
  }[];
  nightGames: {
    id: number;
    game: string;
    release: number;
    playerCount: string;
    playTime: number;
    weight: number;
    rating: number;
  }[];
  friends: string[];
}

export type GameSetupState = InitialStateTypes;
