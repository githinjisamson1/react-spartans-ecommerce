import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // navigation links as an array
  const navItems = ["Products", "Contact"];

  // apply styling to active link item/isActive boolean flag is passed as prop from NavLink
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <header>
      <h1>SpartansTech</h1>

      {/* remember key attribute */}
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <li key={index}>
              <NavLink style={navLinkStyles} to={`/${navItem}`}>
                {navItem}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
