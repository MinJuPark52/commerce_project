import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import JoinPage from "./components/joinPage";

const App = () => {
  const location = useLocation(); // 현재 경로를 가져옵니다.

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/join" && (
        <Header />
      )}
      {/* 로그인 페이지가 아닐 때만 Header 렌더링 */}
      <Routes>
        <Route path="/" element={<h1>홈</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </div>
  );
};

export default App;
