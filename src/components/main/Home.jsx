import React, { useState, useEffect } from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json()) // JSON 형식으로 응답을 파싱
      .then((data) => setProductList(data)) // 데이터를 state에 저장
      .catch((error) => console.error("Error loading product data:", error)); // 에러 핸들링
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className="home-container">
      <h1 className="product-list-title">인기 카테고리 트렌드</h1>
      <div className="product-grid">
        {productList.length > 0 ? (
          productList.map((product) => (
            <div key={product.id} className="product-card">
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
    </div>
  );
};

export default Home;
