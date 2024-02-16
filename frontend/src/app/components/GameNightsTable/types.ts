export type TableProps = {
  data?: string;
  step: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};

export type DataType = {
  id: number,
  gameNight: string,
  date: string,
  time: string,
  location: string,
  participants: number,
  voting: 'yes' | 'no' | 'pending' | undefined,
  games: string[],
};
