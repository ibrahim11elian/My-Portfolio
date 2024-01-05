import React from "react";
import { useAppContext } from "../utilities/context";

function Header() {
  // Destructure values from the app context
  const { theme, active, toggleMenu, toggleTheme, setActive } = useAppContext();

  // Handle scroll events
  if (active === "active") {
    window.onscroll = () => {
      // Close the menu if the screen is less than 991 pixels wide
      if (window.innerWidth < 991) {
        setActive(() => "");
      }

      // Highlight the navigation link corresponding to the current section
      document.querySelectorAll("section").forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          document
            .querySelectorAll(".nav-container ul li a")
            .forEach((links) => {
              links.classList.remove("active");
              document
                .querySelector(".nav-container ul li a[href*=" + id + "]")
                .classList.add("active");
            });
        }
      });
    };
  }

  // Navigation links
  let navigation = [
    "home",
    "about",
    "skills",
    "education",
    "portfolio",
    "contact",
  ];

  // Render the Header component
  return (
    <>
      {/* Overlay to close the menu on click */}
      <span className={`overlay ${active}`} onClick={toggleMenu}></span>

      {/* Navigation bar */}
      <nav className={`header ${active}`}>
        {/* Menu button */}
        <div className={`menu-btn `} onClick={() => toggleMenu()}>
          <i
            className={`menu-icon fa-solid fa-bars ${active ? "fa-xmark" : ""}`}
          />
        </div>

        {/* Theme switcher */}
        <div className="switcher">
          <input
            type="checkbox"
            id="toggle_checkbox"
            defaultChecked={theme === "dark" ? true : false}
            onClick={() => toggleTheme()}
          ></input>
          <label htmlFor="toggle_checkbox">
            <div id="star">
              <div className="star" id="star-1">
                ★
              </div>
              <div className="star" id="star-2">
                ★
              </div>
            </div>
            <div id="moon"></div>
          </label>
        </div>

        {/* Logo */}
        <div className="logo">
          <img
            src={
              theme === "light" ? "./images/logo.svg" : "./images/logo_dark.svg"
            }
            className="my-logo"
            alt="Ibrahim Ahmed"
          />
        </div>

        {/* Navigation links */}
        <div className="nav-container">
          <ul>
            {navigation.map((element, index) => {
              return (
                <li key={index}>
                  <a href={`#${element}`} onClick={() => toggleMenu()}>
                    {element}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Social links */}
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
    </>
  );
}

export default Header;
