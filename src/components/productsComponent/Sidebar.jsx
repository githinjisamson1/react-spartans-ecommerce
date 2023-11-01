import React from "react";
import "./sidebar.css";
import UpdateForm from "./UpdateForm";

const Sidebar = ({
  products,
  filter,
  handleFilter,
  handleFilteredProducts,
  handleAddListing,
  handleChange,
  formData,
  handleSubmit,
  handleEditSubmit,
  showForm,
}) => {
  const categories = [
    "all",
    "smartphone",
    "laptop",
    "smartwatch",
    "earbuds",
    "keyboard",
  ];

  const fetchByCategory = (category) => {
    const URL =
      category === "all"
        ? "https://itproducts.onrender.com/products"
        : `https://itproducts.onrender.com/products?category=${category.toLowerCase()}`;

    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handleFilteredProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="sidebar-container">
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
      <div className="create">
        <button>Add Listing</button>
        <form className="create-product" onSubmit={handleSubmit}>
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
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="image"
          />
          <input
            type="text"
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
          <input type="submit" />
        </form>
        {showForm && (
          <UpdateForm
            formData={formData}
            handleChange={handleChange}
            handleEditSubmit={handleEditSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
