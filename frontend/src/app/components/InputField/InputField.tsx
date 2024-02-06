import { useState } from "react";
import EyeImg from "../../assets/images/eye.png";
import EyeClosedImg from "../../assets/images/eye-closed.png";
import { InputProps } from "./types";

function InputField({
  label,
  password,
  placeholder,
  value,
  onValueChange,
  name,
}: InputProps) {
  const [visiblePwd, setVisiblePwd] = useState(false);
  return (
    <div className=" w-full pt-3 pb-6">
      <p className="font-semibold font-poppins text-[16px] text-white3 text-left mb-2">
        {label}
      </p>
      <div className=" relative flex">
        <input
          className="w-full bg-input text-white3 p-3 rounded-xl border border-border outline-none"
          type={password && !visiblePwd ? "password" : "text"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onValueChange}
        />
        {password && (
          <img
            src={visiblePwd ? EyeClosedImg : EyeImg}
            alt="ShowPwd"
            className=" absolute right-4 top-4 cursor-pointer"
            onClick={() => setVisiblePwd(!visiblePwd)}
          />
        )}
      </div>
    </div>
  );
}

export default InputField;
