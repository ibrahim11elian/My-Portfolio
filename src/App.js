import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Biography from "./components/biography";
import ContactMe from "./components/contact_me";
import Education from "./components/education";
import Header from "./components/header";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import { useAppContext } from "./utilities/context";

function App() {
  const { theme, active } = useAppContext();

  const year = new Date().getFullYear();

  return (
    <div className={`app ${active ? "active" : ""}`} theme={theme}>
      <Home />
      <Header />
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
    </div>
  );
}

export default App;
