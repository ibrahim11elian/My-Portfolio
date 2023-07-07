import React from "react";

function Header({ active, toggleMenu }) {
  function setActive(e) {
    document.querySelectorAll(".nav-container ul li a").forEach((links) => {
      links.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  return (
    <nav className={`header ${active}`}>
      <div className="menu-btn" onClick={() => toggleMenu()}>
        <i className="menu-icon fa-solid fa-bars" />
      </div>
      <div className="logo">
        <img src="./images/logo.svg" className="my-logo" alt="Ibrahim Ahmed" />
      </div>
      <div className="nav-container" onClick={(e) => setActive(e)}>
        <ul>
          <li>
            <a href="#home" onClick={() => toggleMenu()}>
              home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => toggleMenu()}>
              about
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => toggleMenu()}>
              skills
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => toggleMenu()}>
              education
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => toggleMenu()}>
              portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => toggleMenu()}>
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/ibrahim11ahmed"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ibrahim-ahmed-elian"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ibrahim11ahmed/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ibrahim11elian"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
