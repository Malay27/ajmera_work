import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { Link } from "react-router-dom";
import "./Body.css";

const Body = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      console.log(response.data);
      setAllProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  const renderShimmer = () => (
    <div className="shimmer-wrapper">
      {[...Array(4)].map((_, index) => (
        <div className="shimmer" key={index} />
      ))}
    </div>
  );

  return (
    <div className="container">
      <h2>Product</h2>
      <h4>Order it for you or for your beloved ones </h4>
      <div className="product-card-container">
        {loading
          ? renderShimmer()
          : allProducts.map((product) => (
              <Link
                to={`/card/${product.id}`}
                key={product.id}
                className="link"
              >
                <ProductCard product={product} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
