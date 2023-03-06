import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ active }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className={`home container ${active}`} id="home">
      <div className="pic" data-aos="fade-right">
        <img
          src="./images/ibrahim.WebP"
          alt="Ibrahim Ahmed"
          className="my-image"
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
          about me
        </button>
      </div>
    </section>
  );
}

export default Home;
