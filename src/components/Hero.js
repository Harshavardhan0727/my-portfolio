import React, { useState, useEffect } from 'react';
import './Hero.css';

const texts = [
    " Fullstack ",
    " Backend ",
    " Frontend "
];

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150); 

    useEffect(() => {
        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
                setTypingSpeed(100); 
            } else {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
                setTypingSpeed(100);
            }

            if (!isDeleting && displayedText === currentText) {
                setIsDeleting(true);
                setTypingSpeed(1000); 
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length); 
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, typingSpeed]);

    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Hello, I'm Harshavardhan Reddy</h1>
                <h2 className="moving-text">
                    <span>  </span>
                    <span> Java {displayedText} Developer</span>
                </h2>
                <p>Passionate about developing robust and scalable applications.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/harsha-vardhan-reddy-k-802217331/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Harshavardhan0727" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:harshakasi1996@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="src/assets/HarshavardhanreddyResume.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-alt"></i>
                    </a>
                </div>
                <div className="button-group">
                    <a href="#recentWorks" className="btn">Recent Works</a>
                    <a href="#projects" className="btn">Work Experience</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
