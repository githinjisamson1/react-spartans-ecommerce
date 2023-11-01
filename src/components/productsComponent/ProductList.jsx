import React, { useState } from "react";
import "./productList.css";
import UpdateForm from "./UpdateForm";

const ProductList = ({
  products,
  handleDelete,
  handleChange,
  formData,
  handleEditSubmit,
  showForm,
  setShowForm,
}) => {
  const deleteProduct = (id) => {
    fetch(`https://itproducts.onrender.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handleDelete(id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleEditClick = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <ul className="products">
        {products.map((product) => {
          const { id, brand, description, img, price, title } = product;
          return (
            <li key={id}>
              <img src={img} alt={description} />
              <h1>{title}</h1>
              <p>Brand: {brand}</p>
              <p>
                Price: <span>{price}</span>
              </p>
              <div className="btns">
                <button>Add to Cart</button>
                <button
                  onClick={() => {
                    deleteProduct(id);
                  }}
                >
                  Delete
                </button>
                <button onClick={handleEditClick}>Edit</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
