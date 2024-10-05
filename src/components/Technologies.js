import React from 'react';
import { FaJava, FaReact, FaGithub, FaAws, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiKubernetes, SiAngular } from 'react-icons/si';
import './Technologies.css';

const Technologies = () => {
    return (
        <section id="technologies">
            <h2>Technologies and Tools</h2>
            <div className="tech-icons">
                <div className="icon-container" data-aos="fade-up">
                    <FaJava className="icon java-icon" />
                    <p>Java</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="100">
                    <SiAngular className="icon angular-icon" />
                    <p>Angular</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="200">
                    <FaReact className="icon react-icon" />
                    <p>React</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="300">
                    <SiSpringboot className="icon springboot-icon" />
                    <p>Spring Boot</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="400">
                    <SiMongodb className="icon mongodb-icon" />
                    <p>MongoDB</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="500">
                    <FaGithub className="icon github-icon" />
                    <p>GitHub</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="600">
                    <FaAws className="icon aws-icon" />
                    <p>AWS</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="700">
                    <SiKubernetes className="icon kubernetes-icon" />
                    <p>Kubernetes</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="800">
                    <FaDocker className="icon docker-icon" />
                    <p>Docker</p>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
