import { ButtonProps } from "./types";

function Button({ link, text, disabled, type }: ButtonProps) {
  return (
    <button
      className=" bg-button uppercase font-semibold font-poppins text-[18px] text-white1 text-left p-4 px-8 mb-2 rounded-r-[30px] rounded-l-lg cursor-pointer"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
