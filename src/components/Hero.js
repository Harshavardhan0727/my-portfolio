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
                <h2 className="moving-text">{displayedText}</h2>
                <p>I'm passionate about building robust and scalable applications.</p>
                <a href="#projects" className="btn">View Projects</a>
            </div>
        </section>
    );
};

export default Hero;
