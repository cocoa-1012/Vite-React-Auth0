export type TableProps = {
  data?: string;
  step: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};

export type DataType = {
  id: number;
  avatar: string;
  title: string;
  description: string;
  release: number;
  playercount: string;
  playtime: number;
  weight: number;
  rating: number;
  owner: string;
  voted: number;
  unVoted: number;
};
