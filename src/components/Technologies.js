import React from 'react';
import { FaJava, FaReact, FaGithub, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiKubernetes, SiAngular, SiJenkins, SiMaven, SiGradle, SiWebpack } from 'react-icons/si';
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
                    <SiSpringboot className="icon springboot-icon" />
                    <p>Spring Boot</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="200">
                    <FaJsSquare className="icon js-icon" />
                    <p>JavaScript</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="300">
                    <SiAngular className="icon angular-icon" />
                    <p>Angular</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="400">
                    <FaReact className="icon react-icon" />
                    <p>React</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="500">
                    <FaHtml5 className="icon html-icon" />
                    <p>HTML</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="600">
                    <FaCss3Alt className="icon css-icon" />
                    <p>CSS</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="700">
                    <SiMongodb className="icon mongodb-icon" />
                    <p>MongoDB</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="800">
                    <SiGradle className="icon gradle-icon" />
                    <p>Gradle</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="900">
                    <SiWebpack className="icon webpack-icon" />
                    <p>Webpack</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="1000">
                    <SiJenkins className="icon jenkins-icon" />
                    <p>Jenkins</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="1100">
                    <FaGithub className="icon github-icon" />
                    <p>GitHub</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="1200">
                    <FaAws className="icon aws-icon" />
                    <p>AWS</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="1300">
                    <SiKubernetes className="icon kubernetes-icon" />
                    <p>Kubernetes</p>
                </div>
                <div className="icon-container" data-aos="fade-up" data-aos-delay="1400">
                    <FaDocker className="icon docker-icon" />
                    <p>Docker</p>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
