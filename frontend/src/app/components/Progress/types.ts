export type ProgressProps = {
  isSignUp: boolean,
  step: string,
  disabled?: boolean,
  type?: "submit" | "reset" | "button" | undefined,
  onClick?: () => void,
}
  