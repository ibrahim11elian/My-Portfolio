/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { data } from "../projects_data";
const backImage = "./images/back.svg";

function Portfolio() {
  const [projects, setProjects] = useState([...data]);

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

  return (
    <section className="portfolio" id="portfolio">
      <h1 className="section-title" data-aos="fade-up">
        portfolio
      </h1>
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
      <ul className="project-list">
        {projects.map((ele) => {
          return (
            <li key={ele.id}>
              <Project project={ele} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Project({ project }) {
  return (
    <div className="project" data-aos="zoom-in">
      <img
        className="project-img"
        src={project.img || backImage}
        alt={project.name}
      />
      <div className="project-info">
        <div className="name">{project.name}</div>
        <div className="tags">
          {project.tags.map((e, i) => {
            return <span className="tag" key={i}>{`#${e}`}</span>;
          })}
        </div>
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
