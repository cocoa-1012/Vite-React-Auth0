export type ButtonProps = {
    link?: string,
    text: string,
    disabled?: boolean,
    btnFor?: string,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: () => void,
}
  