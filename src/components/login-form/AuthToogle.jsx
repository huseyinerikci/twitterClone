const AuthToogle = ({ isSignUp, setIsSignUp }) => {
  return (
    <div>
      <p className="mt-5 select-none">
        <span className="text-gray-500">
          {!isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
        </span>
        <span
          onClick={() => {
            setIsSignUp(!isSignUp);
          }}
          className="cursor-pointer ms-2 text-blue-500 hover:underline"
        >
          {isSignUp ? "Giriş Yapın" : "Kaydol"}
        </span>
      </p>
    </div>
  );
};

export default AuthToogle;
