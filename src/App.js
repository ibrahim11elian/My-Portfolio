import React, { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";

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
    </>
  );
}

export default App;
