import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      console.log("로그인 정보:", { id, password });
      alert("로그인 되었습니다.");
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <div>
          <input
            placeholder="아이디"
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="비밀번호"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">로그인</button>
      </form>
      <div>
        <Link to="/join">회원가입</Link>
      </div>
    </div>
  );
};

export default LoginPage;
