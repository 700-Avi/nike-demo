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
        <li>
          <a href="/">Location</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <button>
        <a href="/login">Login</a>
      </button>
    </nav>
  );
};

export default Navigation;
