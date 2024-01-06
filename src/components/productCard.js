import React from "react";
import "./Body.css";

const ProductCard = ({ product }) => {
  const extractDes = (str, maxLen) => {
    if (!str) return "";
    return str.length > maxLen ? str.substring(0, maxLen) : str;
  };

  const extractTitle = (str, maxLen) => {
    if (!str) return "";
    return str.length > maxLen ? str.substring(0, maxLen) : str;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <p style={{ fontWeight: 700 }}>{extractTitle(product.title, 20)}</p>
      <p>{extractDes(product.description, 43)}</p>
    </div>
  );
};

export default ProductCard;
