import React from "react";

function Home({ active }) {
  return (
    <section className={`home container ${active}`} id="home">
      <div className="pic">
        <img
          src="./images/ibrahim.jpeg"
          alt="Ibrahim Ahmed"
          className="my-image"
        />
      </div>
      <div className="intro">
        <h1 className="name">hi, i am ibrahim ahmed </h1>
        <div className="position">PERN stack developer</div>
        <p>
          bringing a combination of technical expertise and creative
          problem-solving skills, I am dedicated to delivering robust and
          user-friendly web applications as a full-stack developer.
        </p>
        <button className="btn">about me</button>
      </div>
    </section>
  );
}

export default Home;
