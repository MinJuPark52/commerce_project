import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeadStyle.css";

const JoinPage = () => {
  const [loginState, setLoginState] = useState({
    id: "",
    password: "",
    passwordAgain: "",
    nickname: "",
    error: "",
  });
  const navigate = useNavigate();

  const setError = (field, value) => {
    setLoginState((prev) => ({ ...prev, [field]: value }));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const { id, password, passwordAgain, nickname } = loginState;

    if (!id) {
      setError("error", "아이디: 필수 정보입니다.");
    } else if (!password) {
      setError("error", "비밀번호: 필수 정보입니다.");
    } else if (!passwordAgain) {
      setError("error", "비밀번호 재확인이 필요합니다.");
    } else if (password !== passwordAgain) {
      setError("error", "비밀번호가 일치하지 않습니다.");
    } else if (!nickname) {
      setError("error", "닉네임: 필수 정보입니다.");
    } else {
      setError("error", "");
      console.log("가입 정보:", { id, password, nickname });
      alert("회원가입을 완료했습니다.");
      navigate("/");
    }
  };

  return (
    <div className="join-container">
      <form onSubmit={loginSubmit}>
        <h1>Sign Up</h1>
        <div>
          <input
            className="input-field"
            placeholder="아이디"
            type="text"
            value={loginState.id}
            onChange={(e) => setError("id", e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-field"
            placeholder="비밀번호"
            type="password"
            value={loginState.password}
            onChange={(e) => setError("password", e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-field"
            placeholder="비밀번호 재확인"
            type="password"
            value={loginState.passwordAgain}
            onChange={(e) => setError("passwordAgain", e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-field"
            placeholder="닉네임"
            type="text"
            value={loginState.nickname}
            onChange={(e) => setError("nickname", e.target.value)}
          />
        </div>
        {loginState.error && (
          <p className="error-message">{loginState.error}</p>
        )}
        <button className="submit-btn" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default JoinPage;
