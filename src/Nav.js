import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav className="nav">
      <h3 style={navStyle}>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>

        <Link style={navStyle} to="/characters">
          <li>Characters</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
