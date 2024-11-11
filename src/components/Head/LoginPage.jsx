import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeadStyle.css";
import KakaoLogin from "./KakaoLogin";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();

    if (!id && !password) {
      setError("아이디 또는 비밀번호를 입력해주세요");
    } else if (!id) {
      setError("아이디를 입력해주세요");
    } else if (!password) {
      setError("비밀번호를 입력해주세요");
    } else {
      setError("");
      alert("로그인 되었습니다.");

      // 로그인 시 인증 토큰과 isLoggedIn 값 설정
      localStorage.setItem("authToken", "fake-jwt-token"); // 가짜 인증 토큰
      localStorage.setItem("isLoggedIn", true); // 로그인 상태로 설정

      navigate("/"); // 홈 페이지로 리디렉션
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={loginSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <input
            className="input-field"
            placeholder="아이디"
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="input-field"
            placeholder="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="submit-btn" type="submit">
          로그인
        </button>
        <div className="signup-link">
          <Link to="/join">회원가입</Link>
        </div>
        <div className="kakao-login">
          <KakaoLogin />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
