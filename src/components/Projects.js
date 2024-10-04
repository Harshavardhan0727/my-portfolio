import React from 'react';
import './Projects.css';
import project1 from '../assets/TechM.png';
import project2 from '../assets/Nau.jpg';
import project3 from '../assets/Optum.webp';
import project4 from '../assets/Ascension.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2 data-aos="fade-up">My Projects</h2>
            <div className="project-card" data-aos="fade-right">
                <img src={project1} alt="Project 1" className="project-image" />
                <div className="project-content">
                    <h3>Tech Mahindra</h3>
                    <p>WORK IN PROGRESS</p>
                    <a href="https://example.com" className="btn">View Project</a>
                </div>
            </div>

            <div className="project-card" data-aos="fade-left">
                <img src={project2} alt="Project 2" className="project-image" />
                <div className="project-content">
                    <h3>NAU - Graduate Research Assistant</h3>
                    <p>WORK IN PROGRESS</p>
                    <a href="https://example.com" className="btn">View Project</a>
                </div>
            </div>

            <div className="project-card" data-aos="fade-right">
                <img src={project3} alt="Project 3" className="project-image" />
                <div className="project-content">
                    <h3>UHG - Optum</h3>
                    <p>WORK IN PROGRESS</p>
                    <a href="https://example.com" className="btn">View Project</a>
                </div>
            </div>

            <div className="project-card" data-aos="fade-left">
                <img src={project4} alt="Project 4" className="project-image" />
                <div className="project-content">
                    <h3>Ascension Technologies</h3>
                    <p>WORK IN PROGRESS</p>
                    <a href="https://example.com" className="btn">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
