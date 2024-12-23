import React from 'react';
import project1 from '../assets/athena.png';
import project2 from '../assets/Optum.png';
import project3 from '../assets/dp.jpeg';
import project4 from '../assets/123.png';
import './Recentworks.css';

const FourSections = () => {
  const sections = [
    {
      id: 1,
      imageUrl: project1,
      title: "Athena EHR Dashboards",
      techStack: ["JavaScript", "Java", "React", "SpringBoot", "NoSQL", "GitHub", "Maven", "Docker", "GCP"],
    },
    {
      id: 2,
      imageUrl: project2,
      title: "UHG Websites and Integrations",
      techStack: ["SpringBoot", "Java", "Javascript","React", "HTML", "CSS", "AWS", "Gradle", "Jenkins", "Kubernetes", "Kafka"],
    },
    {
      id: 3,
      imageUrl: project3,
      title: "Deep learning (ML & AI)",
      techStack: ["Machine Learning", "Python", "Neural Networks", "TensorFlow"],
    },
    {
      id: 4,
      imageUrl: project4,
      title: "Dow-jones Website Integration",
      techStack: ["SQL", "MongoDB", "Express", "Docker"],
    },
  ];

  return (
    <section className="recent-works" id = "recentWorks">
      <h2 className="section-heading">Recent Works</h2>
      <div className="four-sections">
        {sections.map((section) => (
          <div key={section.id} className="section">
            <h3 className="section-title">{section.title}</h3>
            <img src={section.imageUrl} alt={section.title} className="section-image" />
            <p className="section-description">{section.description}</p>
            <div className="tech-stack">
              <div className="tech-stack-inner">
                {section.techStack.map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
                {section.techStack.map((tech, index) => (
                  <span key={`${index}-duplicate`} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourSections;
