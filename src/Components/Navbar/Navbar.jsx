import React from "react";
import "./Navbar.css";
import { GoCopy } from "react-icons/go";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav-left">
            <a href="#">Zenoscript-dev</a>
        </div>
        <span className="sr-only">Zenoscript-dev logo</span>
        <div className="nav-right">
          <ul className="nav-links" role="navigation">
            <li className="nav-link">
              <a href="">About me</a>
            </li>
            <li className="nav-link">
              <a href="">Work</a>
            </li>
            <li className="nav-link">
              <a href="">Contact</a>
            </li>
            <li className="nav-mail">
            <GoCopy />
              <a href="">zenoscript.dev@gmail.com</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
