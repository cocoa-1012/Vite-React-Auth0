import { ButtonProps } from './types';

function Button({ text, disabled, type, onClick, btnFor }: ButtonProps) {
  const normalStyle =
    ' bg-button uppercase font-semibold font-poppins text-normal sm:text-[18px] text-white1 text-center sm:text-left p-3 sm:p-4 px-4 sm:px-8 mb-2 rounded-r-[35px] rounded-l-lg cursor-pointer leading-5';
  const prevStyle =
    ' bg-white2 uppercase font-semibold font-poppins text-normal sm:text-[18px] text-button text-center sm:text-left p-3 sm:p-4 px-4 sm:px-8 mb-2 rounded-l-[35px] rounded-r-lg cursor-pointer leading-5';
  const cancelStyle =
    ' bg-warning uppercase font-semibold font-poppins text-normal sm:text-[18px] text-white1 text-center sm:text-left p-3 sm:p-4 px-4 sm:px-8 mb-2 rounded-l-[35px] rounded-r-lg cursor-pointer leading-5 ';
  return (
    <button
      className={
        btnFor === 'prev'
          ? prevStyle
          : btnFor === 'cancel'
          ? cancelStyle
          : normalStyle
      }
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
