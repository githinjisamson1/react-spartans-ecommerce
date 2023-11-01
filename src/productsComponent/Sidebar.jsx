import React from "react";
import "./sidebar.css"

const Sidebar = ({ products }) => {
  const categories = [
    "all",
    "smartphone",
    "laptop",
    "smartwatch",
    "earbuds",
    "keyboard",
  ];
  return (
    <>
      <ul className="sidebar">
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
};

export default Sidebar;
