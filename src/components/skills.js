import React from "react";
import { skills } from "../data/skills_data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

// Base URL for skill icons
let iconBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

function Skills() {
  // Get the window width for responsive design
  const width = window.innerWidth;

  return (
    <section className="skills" id="skills">
      <h1 className="section-title" data-aos="fade-up">
        skills
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={width > 900 ? 8 : 4} // Responsive number of slides
        autoplay={{ delay: 0 }}
        loop={true}
        data-aos="fade-left"
        speed={2000}
      >
        {/* Map through the skills data and create Swiper slides */}
        {Object.keys(skills).map((skill, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                className="skill-img"
                src={`${iconBaseUrl}${skills[skill]}`}
                title={skill}
                alt={skill}
                loading="lazy"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Skills;
