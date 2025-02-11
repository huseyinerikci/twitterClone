import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import PageLoader from "../loader/PageLoader";

const Protected = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    //kullanıcı oturum verileri alma
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    return () => unsub();
  }, []);
  //oturum verileri yükleniyorsa
  if (user === undefined) {
    return <PageLoader />;
  }
  //kullanıcı oturumu kapalı veya eposta doğrulanmamışsa logine git
  if (user === null || user?.emailVerified === false) {
    // eposta doğrulanmamışsa bildirim gönder
    if (user?.emailVerified === false) toast.info("Mailinizi doğrulayın");
    return <Navigate to="/" replace />;
  }
  return <Outlet context={user} />;
};

export default Protected;
