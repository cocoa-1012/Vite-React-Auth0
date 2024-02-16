export type TableProps = {
  data?: string,
  step: string,
  disabled?: boolean,
  type?: "submit" | "reset" | "button" | undefined,
  onClick?: () => void,
}
  
export type DataType = {
  id: number,
  game: string,
  release: number,
  playerCount: string,
  playTime: number,
  weight: number,
  rating: number,
}