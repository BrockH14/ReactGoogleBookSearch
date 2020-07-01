import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand fr" href="/">
        React Google Books Search
      </a>
      <a className="navbar-brand fl" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;