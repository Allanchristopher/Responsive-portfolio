import { useState } from "react";
import pdf from "../assets/Blesson Daniel Raj S.pdf"
import {
  AiOutlineMenu,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineDownload,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  
  const [navbar, setnavbar] = useState(false);

  const changebackground = () => {
    console.log(window.screenY);
    if (window.scrollY >= 10) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <h1>Portfolio</h1>
          </a>
        </div>
        <div className="nav-icon" onClick={handleShowNavbar}>
          <AiOutlineMenu className="iconcolor" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/">
                <AiOutlineHome /> Home
              </a>
            </li>
            <li>
              <a href="/about">
                <AiOutlineUser /> About
              </a>
            </li>
            <li>
              <a href="/project">
                <AiOutlineFileText /> Projects
              </a>
            </li>
            <li>
              <a href="/contact">
                <AiOutlineContacts /> Contact
              </a>
            </li>
            <li>
              <a href={pdf} download={pdf} className="download-resume">
                <AiOutlineDownload /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
