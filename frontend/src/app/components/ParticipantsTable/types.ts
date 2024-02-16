export type TableProps = {
  data?: string;
  step: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};

export type DataType = {
  id: number;
  nickName: string;
  userName: string;
  email: string;
  accepted: "yes" | "no" | "pending" | undefined;
  voted: "yes" | "no" | "pending" | undefined;
};
