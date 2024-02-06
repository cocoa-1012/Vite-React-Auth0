import { Link } from "react-router-dom";
import { InputProps } from "./types";

function SocialButton({ link, src }: InputProps) {
  return (
    <div className=" w-full cursor-pointer">
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="social icons" />
      </Link>
    </div>
  );
}

export default SocialButton;
