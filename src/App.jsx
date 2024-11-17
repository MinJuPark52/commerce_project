import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Head/Header";
import LoginPage from "./components/Head/LoginPage";
import Home from "./components/main/Home";
import Footer from "./components/Footer/Foo";
import JoinPage from "./components/Head/joinPage";
import Pagination from "./components/main/Pagination";
import KakaoLogin from "./components/Head/KakaoLogin";

const App = () => {
  const location = useLocation(); // 현재 위치를 가져옵니다.

  return (
    <div>
      {/* 로그인 페이지가 아닐 때만 Header 렌더링 */}
      {location.pathname !== "/login" && location.pathname !== "/join" && (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />{" "}
        <Route path="/kakaoLojin" element={<KakaoLogin />} />
      </Routes>

      <Pagination />

      {/* 로그인 페이지가 아닐 때만 Footer 렌더링 */}
      {location.pathname !== "/login" && location.pathname !== "/join" && (
        <Footer />
      )}
    </div>
  );
};

export default App;
