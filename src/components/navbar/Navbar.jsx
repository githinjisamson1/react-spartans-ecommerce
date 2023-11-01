import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = ["products", "contact"];

  // apply styling to active link item
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <header>
      <h1>ITS</h1>

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
