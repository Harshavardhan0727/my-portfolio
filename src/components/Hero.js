import React, { useState, useEffect } from 'react';
import './Hero.css';

const texts = [
    "Java Fullstack Developer",
    "Java Backend Developer",
    "Java Frontend Developer"
];

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing/deleting

    useEffect(() => {
        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
                setTypingSpeed(100); // Speed while deleting
            } else {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
                setTypingSpeed(150); // Speed while typing
            }

            // When the text is fully displayed or deleted
            if (!isDeleting && displayedText === currentText) {
                setIsDeleting(true);
                setTypingSpeed(2000); // Wait before deleting
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length); // Move to the next text
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, typingSpeed]);

    return (
        <section id="hero">
            <div className="hero-content">
                <h1>Hello, I'm Harshavardhan Reddy</h1>
                <h2 className="moving-text">
                    <span>I am </span>
                    <span>{displayedText}</span>
                </h2>
                <p>I'm passionate about building robust and scalable applications.</p>
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
                    <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-alt"></i>
                    </a>
                </div>
                <a href="#projects" className="btn">View Projects</a>
            </div>
        </section>
    );
};

export default Hero;
