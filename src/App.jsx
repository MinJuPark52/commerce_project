import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Head/Header";
import LoginPage from "./components/Head/LoginPage";
import Home from "./components/main/Home";
import Footer from "./components/Footer/Foo";
import JoinPage from "./components/Head/JoinPage"; // JoinPage 컴포넌트 추가
import Pagination from "./components/main/Pagination";

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
        {/* 회원가입 페이지 경로 */}
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
