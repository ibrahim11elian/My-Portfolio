import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import Biography from "./components/biography";
import ContactMe from "./components/contact_me";
import Education from "./components/education";
import Header from "./components/header";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
  const [active, setActive] = useState("");
  const toggleMenu = () => {
    setActive(() => (active === "active" ? "" : "active"));
    document.body.classList.toggle("active");
    document.querySelector(".menu-icon").classList.toggle("fa-xmark");
  };

  window.onscroll = () => {
    if (active === "active") {
      if (window.innerWidth < 991) {
        setActive(() => "");
        document.body.classList.remove("active");
        document.querySelector(".menu-icon").classList.remove("fa-xmark");
      }

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
    }
  };

  const year = new Date().getFullYear();

  return (
    <>
      <Home />
      <Header toggleMenu={toggleMenu} active={active} />
      <Biography />
      <Skills />
      <Education />
      <Portfolio />
      <ContactMe />
      <div className="copy-right">
        &copy; copyright @{year} by <span>Ibrahim Ahmed</span>
      </div>
      <ScrollToTop
        smooth
        top={700}
        component={<i className="up-icon fa-sharp fa-solid fa-angle-up" />}
      />
    </>
  );
}

export default App;
