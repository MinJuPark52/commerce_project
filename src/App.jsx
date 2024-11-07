import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Head/Header";
import JoinPage from "./components/Head/JoinPage"; // 경로 수정 필요
import LoginPage from "./components/Head/LoginPage";
import Footer from "./components/Footer/Foo";
import Home from "./components/main/Home";

const App = () => {
  const location = useLocation(); // 현재 경로를 가져옵니다.

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/join" && (
        <Header />
      )}
      {/* 로그인 페이지가 아닐 때만 Header 렌더링 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/join" && (
        <Footer />
      )}
    </div>
  );
};

export default App;
