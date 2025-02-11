import { CiImageOn } from "react-icons/ci";
import { FaRegFaceSmile } from "react-icons/fa6";
import { MdOutlineGifBox } from "react-icons/md";
import Loader from "../loader";

const FormAction = ({ onImageChange, fileInputRef, isLoading }) => {
  return (
    <div className="flex justify-between">
      <div className="text-tw-blue text-xl flex gap-4">
        <label htmlFor="image" type="button" className="form-icon">
          <input
            type="file"
            name="image"
            className="hidden"
            id="image"
            onChange={onImageChange}
            ref={fileInputRef}
          />
          <CiImageOn />
        </label>
        <button type="button" className="form-icon">
          <MdOutlineGifBox />
        </button>
        <button type="button" className="form-icon">
          <FaRegFaceSmile />
        </button>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="flex justify-center bg-secondary text-primary tracking-wide rounded-full px-5 py-[6px] font-bold transition hover:brightness-70 min-w-[100px] cursor-pointer"
      >
        {isLoading ? <Loader /> : "Gönder"}
      </button>
    </div>
  );
};

export default FormAction;
