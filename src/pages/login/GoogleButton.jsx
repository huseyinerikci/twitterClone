import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";

const GoogleButton = () => {
  const navigate = useNavigate();
  const handleGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/feed");
    });
    toast.success("Oturum açıldı");
  };
  return (
    <button
      onClick={handleGoogle}
      className="bg-white text-black flex items-center justify-center py-2 px-10 rounded-full hover:bg-gray-200 whitespace-nowrap gap-x-3 transition cursor-pointer"
    >
      <img className="h-[20px]" src="/google-logo.png" alt="googleLogo" />
      <span>Google ile Giriş Yap</span>
    </button>
  );
};

export default GoogleButton;
