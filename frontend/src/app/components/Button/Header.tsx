import LogoImg from "../assets/images/logo.png";

function Header() {
  return (
    <div className="flex w-full mx-auto py-3 max-w-[1400px] gap-4 px-8 pt-4">
      <img src={LogoImg} className=" cursor-pointer" />
    </div>
  );
}

export default Header;
