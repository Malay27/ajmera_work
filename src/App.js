import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import ProductDetails from "./components/productDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/ajmera_work" element={<Body />}></Route>
        <Route path="/card/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
