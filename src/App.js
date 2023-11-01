import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ProductComponent from "./productsComponent/ProductComponent";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
const App = () => {
  // states
  const [products, setProducts] = useState([]);

  // fetch API - all
  const fetchProducts = () => {
    fetch("https://itproducts.onrender.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // run once
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/products"
          element={<ProductComponent products={products} />}
        />
      </Routes>
    </>
  );
};

export default App;
// prop drilling
