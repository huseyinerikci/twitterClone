import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="mt-5">
      <label>Şifre</label>
      <div className="relative w-full">
        <input
          type={isShow ? "text" : "password"}
          name="password"
          className="input"
        />
        <span
          onClick={() => {
            setIsShow(!isShow);
          }}
          className="absolute end-3 top-[50%] translate-y-[-40%] text-zinc-700  text-xl cursor-pointer select-none"
        >
          {!isShow ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
