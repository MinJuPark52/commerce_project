import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "./Pagination"; // 페이지네이션 컴포넌트 임포트
import "./Home.css";

const Home = ({ isLoggedIn }) => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [productsPerPage] = useState(9); // 한 페이지에 9개씩
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data); // 전체 제품 데이터 로딩
      })
      .catch((error) => console.error("Error loading product data:", error));
  }, []);

  // 페이지 변경 시 호출되는 함수
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // 현재 페이지에 해당하는 제품 리스트 계산
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // 하트 아이콘 클릭 시 로그인 여부에 따른 동작
  const heartClick = () => {
    if (isLoggedIn) {
      navigate("/wishlist");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      <h1 className="product-list-title">인기 카테고리 트렌드</h1>
      <div className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <i className="product-icon" onClick={heartClick}>
                <FiHeart />
              </i>
              <img src={product.image} alt={product.title} />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="loading-message">Loading products...</p>
        )}
      </div>

      {/* 페이지네이션 컴포넌트 호출 */}
      <PaginationComponent
        totalItems={productList.length} // 전체 제품 수
        itemsPerPage={productsPerPage} // 한 페이지에 표시할 제품 수
        currentPage={currentPage} // 현재 페이지
        onPageChange={handlePageChange} // 페이지 변경 시 호출되는 함수
      />
    </div>
  );
};

export default Home;
