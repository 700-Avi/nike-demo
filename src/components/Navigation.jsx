import React from "react";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <a href="/">
          <img src="/images/brand_logo.png" alt="logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/home">Menu</a>
        </li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
