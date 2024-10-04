import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        <div className="skill">Java</div>
        <div className="skill">React</div>
        <div className="skill">Spring Boot</div>
        <div className="skill">HTML/CSS</div>
        <div className="skill">JavaScript</div>
        {/* Add more skills */}
      </div>
    </section>
  );
};

export default Skills;
