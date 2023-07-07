import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home({ active }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className={`home`} id="home">
      <div className="pic" data-aos="fade-right">
        <LazyLoadImage
          src="./images/ibrahim.webp"
          alt="Ibrahim Ahmed"
          className="my-image"
          placeholderSrc="./image/ibrahim200.webp"
          effect="blur"
        />
      </div>
      <div className="intro">
        <h1 className="name" data-aos="fade-up">
          hi, i am ibrahim ahmed{" "}
        </h1>
        <div className="position" data-aos="fade-up">
          PERN stack developer
        </div>
        <p data-aos="fade-up">
          bringing a combination of technical expertise and creative
          problem-solving skills, I am dedicated to delivering robust and
          user-friendly web applications as a full-stack developer.
        </p>
        <button className="btn" data-aos="fade-up">
          <a href="#about">about me</a>
        </button>
      </div>
    </section>
  );
}

export default Home;
