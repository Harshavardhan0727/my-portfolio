import React from 'react';
import './Projects.css';
import project1 from '../assets/TechM.png';
import project2 from '../assets/Nau.jpg';
import project3 from '../assets/Optum.webp';
import project4 from '../assets/Ascension.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2 data-aos="fade-up">Work Experience</h2>

      
            <div className="project-card" data-aos="fade-right">
                <img src={project4} alt="Project 4" className="project-image" />
                <div className="project-content">
                    <h3>Ascension Technologies</h3>
                    <p>
                    Developed single-page applications (SPAs) using ReactJS, leveraging HTML5 DOM features to update dynamic content efficiently. Created various front-end screens with ReactJS and utilized pre-built components from NPM for streamlined development. Built and maintained complex software components, adhering to department standards, including JSP, JSTL, EJB, JMS, JAX-WS, REST APIs, and Java Mail. Used Java, J2EE, Struts, and JDBC to develop robust applications.
                    </p>
                    <p>
                    Built microservices to retrieve and store data with Couchbase using the Couchbase SDK Java client. Employed JWT tokens for secure REST service authentication. Developed backend services to interact with Oracle 12c using JDBC templates and created essential PL/SQL scripts for database operations.
                    </p>
                    <p>
                    Managed deployments of microservices in Docker containers on Amazon EC2 via AWS Admin Console. Implemented a continuous delivery pipeline using Docker, Jenkins, GitHub, and AWS AMIs. Designed and executed JUnit test cases for service validation and developed Cucumber test cases with step definitions to conduct integration and UAT testing.
                    </p>
                </div>
            </div>

           
            <div className="project-card" data-aos="fade-left">
                <img src={project3} alt="Project 3" className="project-image" />
                <div className="project-content">
                    <h3>UHG - Optum</h3>
                    <p>
                    
                    </p>
                </div>
            </div>

            
            <div className="project-card" data-aos="fade-right">
                <img src={project2} alt="Project 2" className="project-image" />
                <div className="project-content">
                    <h3>NAU - Graduate Research Assistant</h3>
                    <p>
                    Created a voice assistant and speech recognition robot to address inquiries regarding university policies, campus directions, HR-related questions, and to carry out simple tasks. Supervised and guided three interns during the Summer 2022 program, focusing on the development of the Speech Louie Robot and the application of neural networks in machine learning.
                    </p>
                </div>
            </div>

           
            <div className="project-card" data-aos="fade-left">
                <img src={project1} alt="Project 1" className="project-image" />
                <div className="project-content">
                    <h3>Tech Mahindra</h3>
                    <p>
                    Designed, coded, and tested an enterprise-level Java application, utilizing core Java features like multithreading, collections, and exception handling to optimize performance and reliability. Implemented MVC architecture with Spring to effectively manage data flow between the frontend and business logic layers. Developed RESTful web services to facilitate communication between applications and improve data sharing.
                    </p>  
                    <p>
                    Leveraged the Spring AOP module for transaction management within Spring-based applications, ensuring robust and secure operations. Built microservices using Spring Boot that interact through REST APIs and Kafka brokers for efficient and scalable data processing. Used Maven for build automation and deployment on the Tomcat server, with Splunk for log monitoring and performance insights.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
