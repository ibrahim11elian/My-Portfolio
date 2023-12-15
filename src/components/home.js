import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home({ active }) {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of AOS animations to 1000 milliseconds (1 second)
    });
  }, []);

  return (
    // Home section
    <section className={`home`} id="home">
      {/* Image section with lazy loading */}
      <div className="pic" data-aos="fade-right">
        <LazyLoadImage
          srcSet="./images/ibrahim.webp"
          alt="Ibrahim Ahmed"
          className="my-image"
          placeholderSrc="./image/ibrahim200.webp"
          effect="blur" // Apply a blur effect during lazy loading
        />
      </div>

      {/* Introduction section */}
      <div className="intro">
        <h1 className="name">hi, i am ibrahim ahmed </h1>

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
