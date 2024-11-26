// src/KakaoLogin.js

const KakaoLogin = () => {
  const redirect_uri = "http://localhost:5173/auth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button
        onClick={handleLogin}
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <img src="src\components\img\kakao_login_medium_narrow.png" />
      </button>
    </>
  );
};
export default KakaoLogin;
