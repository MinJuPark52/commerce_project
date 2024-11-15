import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "./Pagination";
import "./Home.css";

const Home = ({ isLoggedIn }) => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
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
        totalItems={productList.length}
        itemsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
