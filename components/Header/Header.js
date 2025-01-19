import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Website Generator</h1>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#templates">Templates</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
