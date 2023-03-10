import React, { useState } from "react";
import Biography from "./components/biography";
import Education from "./components/education";
import Header from "./components/header";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

function App() {
  const [active, setActive] = useState("");
  const toggleMenue = () => {
    setActive(() => (active === "active" ? "" : "active"));
    document.querySelector(".menu-icon").classList.toggle("fa-xmark");
  };
  return (
    <>
      <Home active={active} />
      <Header toggleMenue={toggleMenue} active={active} />
      <Biography />
      <Skills />
      <Education />
      <Portfolio />
    </>
  );
}

export default App;
