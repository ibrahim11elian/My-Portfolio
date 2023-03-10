/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Education() {
  return (
    <section className="education container">
      <h1 className="section-title" data-aos="fade-up">
        education
      </h1>
      <ul className="edu-list">
        <li className="title" data-aos="fade-up">
          education
        </li>
        <li className="item" data-aos="fade-left">
          <div className="date">
            (<span className="start-date">2018</span> -{" "}
            <span className="end-date">2022</span>)
          </div>
          <h2 className="name">
            Faculty of computer science and artificial intelligence
          </h2>
          <div className="details">
            Bachelor's degree, Computer Science • Helwan, Cairo Governorate
          </div>
        </li>
        <li className="item" data-aos="fade-right">
          <div className="date">
            (<span className="start-date">2021</span> -{" "}
            <span className="end-date">2022</span>)
          </div>
          <h2 className="name">
            Udacity Certificate of Completion, nano degree in Professional Web
            Development
          </h2>
          <div className="details">
            <p>Technical Training:</p>
            <ul>
              <li>- Learn JavaScript Data Types</li>
              <li>- Understand logic and control flow</li>
              <li>- Learn how to write proper and correct JavaScript Syntax</li>
              <li>- Create web content using Javascript</li>
              <li>- Modify web content using Javascript</li>
              <li>- Manage website performance</li>
            </ul>
            <a
              href="https://graduation.udacity.com/confirm/9DHPDSHP"
              target={"_blank"}
            >
              certificate link
            </a>
          </div>
        </li>
        <li className="item" data-aos="fade-left">
          <div className="date">
            (<span className="start-date">2022</span> -{" "}
            <span className="end-date">2022</span>)
          </div>
          <h2 className="name">
            Udacity Certificate of Completion, nano degree in Advanced Full
            Stack Web Development
          </h2>
          <div className="details">
            <p>Technical Training:</p>
            <ul>
              <li>
                - Understand the fundamental tools needed to build a basic API
                in a way that is both scalable, and maintainable.
              </li>
              <li>
                - Write TypeScript to reduce developing errors. Manage
                async/await, promises, and error handling with TypeScript.
              </li>
              <li>
                - Create test units with Jasmine. Use Express to build APIs.
              </li>
              <li>- Build a RESTful JSON API with Node and Postgres.</li>
              <li>
                - Understand essential topics like databases and querying, API
                architecture, database migrations, REST, CRUD, creating a
                testing environment, password hashing, and route authorization
                via JWTs.
              </li>
              <li>
                - Create environment properties in Elastic Beanstalk. Create an
                S3 bucket and configure it for web hosting.
              </li>
              <li>- Build an automated pipeline and scripts.</li>
              <li>- Create documentation using markdown files and diagrams.</li>
            </ul>
            <a
              href="https://graduation.udacity.com/confirm/HXYGKYQZ"
              target={"_blank"}
            >
              certificate link
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Education;
