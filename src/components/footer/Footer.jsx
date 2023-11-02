import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      &copy; Spartans Group 3 {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
