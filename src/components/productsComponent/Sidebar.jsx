import React from "react";
import "./sidebar.css";
import UpdateForm from "./UpdateForm";

// inline destructuring/access props
const Sidebar = ({
  handleFilteredProducts,
  handleChange,
  formData,
  handleSubmit,
}) => {
  // categories as an array
  const categories = [
    "All",
    "Smartphone",
    "Laptop",
    "Smartwatch",
    "Earbuds",
    "Keyboard",
  ];

  // GET/filter by category/show products based on category
  const fetchByCategory = (category) => {
    const URL =
      category.toLowerCase() === "all"
        ? "https://itproducts.onrender.com/products"
        : `https://itproducts.onrender.com/products?category=${category.toLowerCase()}`;

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        handleFilteredProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="sidebar-container">
      {/* Categories */}
      <ul className="sidebar">
        {categories.map((category) => {
          return (
            <li
              key={category}
              onClick={() => {
                fetchByCategory(category);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>

      {/* Add New Listing Form */}
      <div className="create">
        <form className="create-product" onSubmit={handleSubmit}>
          <h3>Add Listing</h3>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="brand"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="description"
          />
          <input
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="image"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="price"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
          />
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
