import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Biography() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="about " id="about">
      <h1 className="section-title" data-aos="fade-up">
        biography
      </h1>
      {/* about me section */}
      <p className="about-me" data-aos="zoom-in">
        I studied computer science at the Faculty of Computers and Artificial
        Intelligence CS major at Helwan University in Egypt, I strongly desire
        to constantly expand my skill set and push the boundaries of what is
        possible in web development, allowing me to create innovative and
        cutting-edge applications.
      </p>

      {/* developer data section */}
      <ul className="info" data-aos="fade-right">
        <li>
          <span className="type">name: </span>
          <p className="data"> Ibrahim Ahmed</p>
        </li>

        <li>
          <span className="type">email: </span>
          <p className="data"> ibrahim11elian@gmail.com</p>
        </li>

        <li>
          <span className="type">address: </span>
          <address className="data"> Giza, Egypt</address>
        </li>

        <li>
          <span className="type">phone: </span>
          <p className="data"> +20 01157676284</p>
        </li>

        <li>
          <span className="type">age: </span>
          <p className="data"> 23 Years</p>
        </li>

        <li>
          <span className="type">experience: </span>
          <p className="data"> +1 Year</p>
        </li>
      </ul>

      <button className="btn" data-aos="fade-left">
        <a href="./files/Ibrahim_Ahmed.pdf" download>
          download CV
        </a>
      </button>
    </section>
  );
}

export default Biography;
