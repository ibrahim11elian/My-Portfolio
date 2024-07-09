/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { data } from "../data/projects_data";
const backImage = "./images/back.svg";

// Portfolio component
function Portfolio() {
  // State to manage the list of projects
  const [projects, setProjects] = useState([...data]);
  const [active, setActive] = useState("all");

  // Function to filter projects based on the category button clicked
  const filter = (element) => {
    const category = element.toLowerCase().split("-")[0];

    if (category === "all") {
      setProjects([...data]);
      setActive("all");
    } else {
      const newList = data.filter((e) => {
        return e.category === category;
      });
      setProjects([...newList]);
      setActive(category);
    }
  };

  const filterList = ["all", "front-end", "back-end", "full-stack"];

  // Render the Portfolio section
  return (
    <section className="portfolio" id="portfolio">
      {/* Section title */}
      <h1 className="section-title" data-aos="fade-up">
        portfolio
      </h1>

      {/* Filter buttons */}
      <ul className="filter" data-aos="fade-up">
        {filterList.map((ele) => {
          return (
            <li key={ele}>
              <button
                className={`btn ${ele.startsWith(active) ? "active" : ""}`}
                onClick={() => filter(ele)}
              >
                {ele}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Project list */}
      <ul className="project-list">
        {projects.map((ele) => {
          return <Project project={ele} key={ele.id} />;
        })}
      </ul>
    </section>
  );
}

// Project component
function Project({ project }) {
  return (
    <li className="card">
      <a className="card-img-link" href={project.link} target="_blank">
        <LazyLoadImage
          src={project.img || backImage}
          alt={project.name}
          effect="blur"
          title={project.name}
          className="card-img"
        />
      </a>
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{project.name}</h3>
          <ul className="card-tags">
            {project.tags?.slice(0, 4).map((tag) => {
              return (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card-buttons">
          {project.live && (
            <a href={project.live} className="live-site-button btn">
              <FiGlobe className="live-icon" />
              {project.category === "back" ? "Live API" : " Live Site"}
            </a>
          )}
          <a href={project.link} className="github-button btn">
            <FiGithub className="git-icon" />
            GitHub
          </a>
        </div>
      </div>
    </li>
  );
}

export default Portfolio;
