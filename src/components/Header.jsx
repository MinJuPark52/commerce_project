import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate("/login")}>로그인</button>
        <button onClick={() => navigate("/login")}>좋아요</button>
        <button onClick={() => navigate("/login")}>장바구니</button>
      </div>
      <div className="header">
        <input
          type="text"
          className="header_search"
          placeholder="검색어를 입력해주세요"
        />
      </div>
      <div>
        <ul className="header-links">
          <li>신상품</li>
          <li>베스트</li>
          <li>세일</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
