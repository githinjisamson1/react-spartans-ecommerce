import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ProductComponent from "./components/productsComponent/ProductComponent";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  // !STATES

  // state for fetched products
  const [products, setProducts] = useState([]);

  // state for creating a new product
  const [formData, setFormData] = useState({
    brand: "",
    description: "",
    img: "",
    price: "",
    title: "",
  });

  // state for creating a new product
  const [editFormData, setEditFormData] = useState({
    brand: "",
    description: "",
    img: "",
    price: "",
    title: "",
  });

  // state to show/hide update form
  const [showForm, setShowForm] = useState(false);

  // !HTTP METHODS

  // GET
  const fetchProducts = () => {
    fetch("https://itproducts.onrender.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // POST
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
        // console.log(data);
        handleAddListing(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // PATCH
  const patchProduct = () => {
    fetch("https://itproducts.onrender.com/products/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(editFormData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        handlePatchProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // !run once/initial render
  useEffect(() => {
    fetchProducts();
  }, []);

  // !EVENT LISTENERS

  // filter items to display by category
  const handleFilteredProducts = (items) => {
    setProducts(items);
  };

  // delete an item from products array
  const handleDelete = (id) => {
    const remProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(remProducts);
  };

  // add a new product to products array
  const handleAddListing = (item) => {
    setProducts([...products, item]);
  };

  // handle input box changes dynamically
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // spread old formData, update using dynamic object properties
    setFormData({ ...formData, [name]: value });
    // console.log(formData)
  };

  // handle add new product form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // POST after submitting postForm
    postListing();
  };

  // handle edit form input box changes dynamically
  const handleEditChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // spread old formData, update using dynamic object properties
    setEditFormData({ ...editFormData, [name]: value });
    // console.log(formData)
  };

  // TODO: work on how to pass id of product to enable patch
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // PATCH after submitting updateForm
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
        <Route
          // exact
          index
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
              handleEditChange={handleEditChange}
              editFormData={editFormData}
              handleEditSubmit={handleEditSubmit}
              setShowForm={setShowForm}
              showForm={showForm}
            />
          }
        />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

// passing props prop drilling
// !!!useContext
