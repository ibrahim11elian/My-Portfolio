/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { data } from "../data/projects_data";
const backImage = "../images/back.svg";

// Portfolio component
function Portfolio() {
  // State to manage the list of projects
  const [projects, setProjects] = useState([...data]);

  // Function to filter projects based on the category button clicked
  const filter = (e) => {
    const btn = e.target.textContent.toLowerCase().split("-")[0];

    if (btn === "all") {
      setProjects([...data]);
    } else {
      const newList = data.filter((e) => {
        return e.category === btn;
      });
      setProjects([...newList]);
    }
  };

  // Render the Portfolio section
  return (
    <section className="portfolio" id="portfolio">
      {/* Section title */}
      <h1 className="section-title" data-aos="fade-up">
        portfolio
      </h1>

      {/* Filter buttons */}
      <ul className="filter">
        <li>
          <button className="btn" data-aos="fade-up" onClick={(e) => filter(e)}>
            all
          </button>
        </li>
        <li>
          <button className="btn" data-aos="fade-up" onClick={(e) => filter(e)}>
            Front-End
          </button>
        </li>
        <li>
          <button className="btn" data-aos="fade-up" onClick={(e) => filter(e)}>
            Back-End
          </button>
        </li>
        <li>
          <button className="btn" data-aos="fade-up" onClick={(e) => filter(e)}>
            Full-Stack
          </button>
        </li>
      </ul>

      {/* Project list */}
      <ul className="project-list">
        {projects.map((ele) => {
          return (
            <li key={ele.id}>
              {/* Project component */}
              <Project project={ele} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Project component
function Project({ project }) {
  // Render individual project
  return (
    <div className="project" data-aos="zoom-in">
      {/* Project image */}
      <LazyLoadImage
        srcSet={project.img || backImage}
        alt={project.name}
        className="project-img"
        effect="blur" // Apply a blur effect during lazy loading
      />
      {/* Project information */}
      <div className="project-info">
        <div className="name">{project.name}</div>
        {/* Project tags */}
        <div className="tags">
          {project.tags.map((e, i) => {
            return <span className="tag" key={i}>{`#${e}`}</span>;
          })}
        </div>
        {/* Project links */}
        <div className="links">
          {project.live ? (
            <a href={project.live} className="btn" target={"_blank"}>
              live site
            </a>
          ) : null}

          <a href={project.link} className="btn" target={"_blank"}>
            project link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
