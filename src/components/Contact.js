import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" data-aos="fade-up">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <input type="email" placeholder="harshakasi1996@gmail.com" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
            <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://https://github.com/Harshavardhan0727?tab=repositories.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
        </section>
    );
};

export default Contact;
