import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import "./HeadStyle.css"; // Header.css를 import

const categories = {
  new: ["가죽자켓", "코트", "경량패팅", "단독", "인플루언서 PICK"],
  best: ["스트릿", "캐주얼", "미니멀", "레트로"],
  sale: ["타임세일", "간절기 아우터", "마김 임박", "신규 오픈", "단독 상품"],
};

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(null);

  const toggleMenu = (menu) => {
    setOpen(isOpen === menu ? null : menu);
  };

  return (
    <>
      <div className="header-container">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="검색어를 입력해주세요"
          />
          <FiSearch className="search-icon" />
        </div>

        <div className="icon-container">
          <button onClick={() => navigate("/login")} aria-label="로그인">
            <FiUser />
          </button>
          <button onClick={() => navigate("/wishlist")} aria-label="찜 목록">
            <FiHeart />
          </button>
          <button onClick={() => navigate("/cart")} aria-label="장바구니">
            <FiShoppingCart />
          </button>
        </div>
      </div>

      <div className="category-container">
        <ul className="category-list">
          <li onClick={() => toggleMenu("new")}>신상품</li>
          <li onClick={() => toggleMenu("best")}>베스트</li>
          <li onClick={() => toggleMenu("sale")}>세일</li>
        </ul>

        {isOpen && (
          <ul className="subcategory-list">
            {categories[isOpen].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
