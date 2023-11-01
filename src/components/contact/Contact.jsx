import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="hero"
        />
      </div>
      <div className="main-contact">
        <h1 className="hero">Contact Us</h1>
        <h1 className="contacts">We're here to help you</h1>
        <div className="cards">
          <div className="card">
            <h2 className="role">Sales</h2>
            <p className="role-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              exercitationem?
            </p>
            <h3 className="name">Gad</h3>
            <p className="tel">12345678</p>
          </div>

          <div className="card">
            <h2 className="role">Complaints</h2>
            <p className="role-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique, impedit.
            </p>
            <h3 className="name">Ted</h3>
            <p className="tel">12345678</p>
          </div>
          <div className="card">
            <h2 className="role">Returns</h2>
            <p className="role-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              magni?
            </p>
            <h3 className="name">Victor</h3>
            <p className="tel">12345678</p>
          </div>
          <div className="card">
            <h2 className="role">Marketing</h2>
            <p className="role-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              esse?
            </p>
            <h3 className="name">Julius</h3>
            <p className="tel">12345678</p>
          </div>
          <div className="card">
            <h2 className="role">HR</h2>
            <p className="role-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              fugit.
            </p>
            <h3 className="name">Samson</h3>
            <p className="tel">12345678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
