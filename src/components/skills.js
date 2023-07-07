import React from "react";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h1 className="section-title" data-aos="fade-up">
        skills
      </h1>
      <div className="skill-tech">
        <ProgressPar skill={"HTML"} percent={93} aos="fade-right" />
        <ProgressPar skill={"CSS"} percent={85} aos="fade-left" />
        <ProgressPar skill={"javascript"} percent={80} aos="fade-right" />
        <ProgressPar skill={"typescript"} percent={72} aos="fade-left" />
        <ProgressPar skill={"postgreSQL"} percent={70} aos="fade-right" />
        <ProgressPar skill={"express JS"} percent={80} aos="fade-left" />
        <ProgressPar skill={"react"} percent={76} aos="fade-right" />
        <ProgressPar skill={"node JS"} percent={84} aos="fade-left" />
      </div>
    </section>
  );
}

const ProgressPar = ({ skill, percent, aos }) => {
  return (
    <div className="par" data-aos={aos}>
      <div className="content" style={{ width: ` ${percent}%` }}>
        <span>{skill}</span>
        <span>
          {percent}
          {"%"}
        </span>
      </div>
    </div>
  );
};

export default Skills;
