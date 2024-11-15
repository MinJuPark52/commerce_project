import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import "./HeadStyle.css";

const keywords = [
  "캐주얼 오버핏 흑청 자켓",
  "소가죽 메리제인 플랫슈즈",
  "클레어 몰드 스트랩 샌들",
  "베이직 스틸레토힐",
  "핀덕 스트레이트 일자 팬츠",
  "멀티 포켓 캐주얼 크로스백",
  "미니 토트 크로스백",
  "데일리 포켓 백팩",
  "캐시미어 울 라운드 니트",
  "어바웃 벨트 숄더백",
  "뉴 보부상 숄더백",
  "프리미엄 숏 패딩 점퍼",
  "베이직 라운드 가디건",
];

const categories = {
  new: ["가죽자켓", "코트", "경량패팅", "단독", "인플루언서 PICK"],
  best: ["스트릿", "캐주얼", "미니멀", "레트로"],
  sale: ["타임세일", "간절기 아우터", "마감 임박", "신규 오픈", "단독 상품"],
};

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [isOpen, setOpen] = useState(null);

  // 카테고리 메뉴 토글
  const toggleMenu = (menu) => {
    setOpen(isOpen === menu ? null : menu);
  };

  // 검색어 변경 시 자동완성 필터링
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // 검색어가 있을 경우 키워드 목록 필터링
    if (term) {
      const filtered = keywords.filter((keyword) =>
        keyword.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredKeywords(filtered);
    } else {
      setFilteredKeywords([]); // 검색어가 없으면 자동완성 리스트 비우기
    }
  };

  // 자동완성 항목을 선택했을 때
  const handleSearchSelect = (selectedKeyword) => {
    setSearchTerm(selectedKeyword);
    setFilteredKeywords([]);
    navigate(`/search?query=${selectedKeyword}`);
  };

  return (
    <>
      <div className="header-container">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FiSearch className="search-icon" />
        </div>

        {/* 자동완성 목록 */}
        {filteredKeywords.length > 0 && (
          <ul className="suggestions-list show">
            {filteredKeywords.map((keyword, index) => (
              <li
                key={index}
                className="suggestion-item"
                onClick={() => handleSearchSelect(keyword)}
              >
                {keyword}
              </li>
            ))}
          </ul>
        )}

        <div className="icon-container">
          {/* 로그인 상태에 따라 로그인/회원 표시 */}
          <button onClick={() => navigate("/login")} aria-label="로그인">
            <FiUser />
          </button>
          {/* 위시리스트 버튼 클릭 시 로그인 여부에 따라 동작 */}
          <button onClick={() => navigate("/wishlist")} aria-label="찜 목록">
            <FiHeart />
          </button>
          <button onClick={() => navigate("/cart")} aria-label="장바구니">
            <FiShoppingCart />
          </button>
        </div>
      </div>

      {/* 카테고리 메뉴 */}
      <div className="category-container">
        <ul className="category-list">
          <li onClick={() => toggleMenu("new")}>신상품</li>
          <li onClick={() => toggleMenu("best")}>베스트</li>
          <li onClick={() => toggleMenu("sale")}>세일</li>
        </ul>

        {/* 하위 카테고리 목록 표시 */}
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
