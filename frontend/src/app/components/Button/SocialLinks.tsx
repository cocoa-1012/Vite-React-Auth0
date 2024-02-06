import FacebookImg from "../assets/images/facebook.png";
import GoogleImg from "../assets/images/google.png";
import AppleImg from "../assets/images/apple.png";
import SocialButton from "./SocialButton/SocialButton";

function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialButton src={GoogleImg} link="https://github.com/" />
      <SocialButton src={AppleImg} link="https://github.com/" />
      <SocialButton src={FacebookImg} link="https://github.com/" />
    </div>
  );
}

export default SocialLinks;
