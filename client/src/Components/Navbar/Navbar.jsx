import React, { useState } from "react";
import "./Navbar.css";
import { GoCopy } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] =useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    const navRight = document.getElementsByClassName("nav-right");
    const navLinks = document.getElementsByClassName("nav-links");
    if (!showMenu) {
      if(navRight.length > 0 && navLinks.length > 0) {
        navRight[0].style.display = "flex";
        navRight[0].style.position = "absolute";
        navRight[0].style.right = "0%";
        navRight[0].style.zIndex = 200;
        navRight[0].style.borderRadius = "15px";
        navRight[0].style.backgroundColor = "var(--8)";
        navRight[0].style.padding = "2rem";
        navRight[0].style.top = "100%";
        navLinks[0].style.display = "flex";
        navLinks[0].style.flexDirection = "column";
      }
    }else{
      if(navRight.length > 0 && navLinks.length > 0) {
        navRight[0].style.display = "none";
        navLinks[0].style.display = "none";
      }
    }
  };
  return (
    <header className="page-padding">
      <nav className="nav">
        <div className="nav-left">
            <a href="/">Zenoscript-dev</a>
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
              <a href="/blogs">Blogs</a>
            </li>
            <li className="nav-link">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav-mail">
            <GoCopy />
              <a href="">zenoscript.dev@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="nav-responsive-icons" onClick={toggleMenu}>
          {!showMenu?
        <RxHamburgerMenu size={32} id="hamburger-icon"/>:
        <RxCross2 size={32} id="cross-icon"/>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
