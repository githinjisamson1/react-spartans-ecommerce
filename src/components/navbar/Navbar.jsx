import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = ["products", "contact", "about"];
  return (
    <header>
      <h1>ITS</h1>
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <li key={index}>
              <Link to={`/${navItem}`}>{navItem}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
