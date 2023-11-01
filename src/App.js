import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ProductComponent from "./components/productsComponent/ProductComponent";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";

const App = () => {
  // maintain all states at top level
  const [products, setProducts] = useState([]);
  // const [filter, setFilter] = useState("");

  // state for user inputs
  const [formData, setFormData] = useState({
    brand: "",
    description: "",
    img: "",
    price: "",
    title: "",
  });

   const [showForm, setShowForm] = useState(false);

  // !HTTP METHODS
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

  const postListing = () => {
    fetch("https://itproducts.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handleAddListing(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const patchProduct = () => {
    fetch("https://itproducts.onrender.com/products/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handlePatchProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // run once/initial render
  useEffect(() => {
    fetchProducts();
  }, []);

  // !EVENT LISTENERS

  // const handleFilter = (category) => {
  //   setFilter(category);
  //   console.log(filter);
  //   handleProducts();
  // };

  // const handleProducts = () => {
  //   const newProducts = products.filter((product) => {
  //     return product.category.toLowerCase() === filter.toLowerCase();
  //   });
  //   setProducts(newProducts);
  // };

  const handleFilteredProducts = (items) => {
    setProducts(items);
  };

  const handleDelete = (id) => {
    const remProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(remProducts);
  };

  const handleAddListing = (item) => {
    setProducts([...products, item]);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // dynamic object properties
    setFormData({ ...formData, [name]: value });
    // console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postListing();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    patchProduct();
  };

  // returns original array
  const handlePatchProduct = (updatedItem) => {
    const updatedItems = products.map((product) => {
      if (product.id === updatedItem.id) {
        return updatedItem;
      } else {
        return product;
      }
    });
    setProducts(updatedItems);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/products"
          element={
            <ProductComponent
              products={products}
              handleFilteredProducts={handleFilteredProducts}
              handleDelete={handleDelete}
              handleAddListing={handleAddListing}
              handleChange={handleChange}
              formData={formData}
              handleSubmit={handleSubmit}
              handleEditSubmit={handleEditSubmit}
              setShowForm={setShowForm}
              showForm={showForm}
              index
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;

// passing props prop drilling
// !!useContext
