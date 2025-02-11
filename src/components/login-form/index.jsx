import ForgotPassword from "./ForgotPassword";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import AuthToogle from "./AuthToogle";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isSignUp) {
        //hesap oluştur
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(res.user);
        toast.info("Mailinize doğrulama e-postası gönderildi.");
        setIsSignUp(false);
      } else {
        //oturum aç
        const res = await signInWithEmailAndPassword(auth, email, password);

        //mail doğrulanmamış ise
        if (!res.user.emailVerified) {
          return toast.info("Lütfen mailinizi doğrulayın");
        }
        //mail doğrulanmışsa
        navigate("/feed");
        toast.success("Oturum açıldı");
      }
      e.target.reset();
    } catch (error) {
      toast.error("Hata: " + error.code);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />
      <PasswordInput />

      {!isSignUp ? <ForgotPassword /> : <div className="h-[28px] w-1" />}

      <button
        type="submit"
        className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300 cursor-pointer "
      >
        {!isSignUp ? "Giriş Yap" : "Kaydol"}
      </button>

      <AuthToogle isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
    </form>
  );
};

export default Form;
