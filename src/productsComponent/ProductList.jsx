import React from "react";
import "./productList.css";

const ProductList = ({ products }) => {
  return (
    <>
      <ul className="products">
        {products.map((product) => {
          const {
            id,
            brand,
            category,
            description,
            img,
            price,
            rating,
            title,
          } = product;
          return (
            <li key={id}>
              <img src={img} alt={description} />
              <h1>{title}</h1>
              <p>Brand: {brand}</p>
              <p></p>
              <p>
                Price: <span>{price}</span>
              </p>
              <div className="btns">
                <button>More Info</button>
                <button>Add to Cart</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
