// src/KakaoLogin.js

const KakaoLogin = () => {
  const Rest_api_key = "5aa455913969de8a7301ca72f5fc3ad4"; //REST API KEY
  const redirect_uri = "http://localhost:5173/auth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
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
