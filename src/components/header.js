import React from "react";

function Header({ setActive, active, toggleMenue }) {
  return (
    <section className={`header ${active}`}>
      <div className="menu-btn" onClick={() => toggleMenue()}>
        <i className="menu-icon fa-solid fa-bars"></i>
      </div>
      <div className="logo">
        <img src="./images/logo.svg" className="my-logo" alt="Ibrahim Ahmed" />
      </div>
      <nav className="nav-container">
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#home">about</a>
          </li>
          <li>
            <a href="#home">portfolio</a>
          </li>
          <li>
            <a href="#home">contact</a>
          </li>
        </ul>
      </nav>
      <section className="social-links">
        <ul>
          <li>
            <a href="#home">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#home">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#home">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#home">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Header;
