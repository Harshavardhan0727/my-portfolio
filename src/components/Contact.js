import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_caqonte', 
            'template_1rs48hq', 
            {
                from_email: formData.email,
                message: formData.message
            },
            'g7LE7T3yO55Tuyp9K' 
        )
        .then((response) => {
            alert('Message sent successfully!');
            setFormData({ email: '', message: '' }); 
        })
        .catch((error) => {
            alert('Failed to send the message. Please try again later.');
            console.error('EmailJS error:', error);
        });
    };

    return (
        <section id="contact" data-aos="fade-up">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
            <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Harshavardhan0727?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </section>
    );
};

export default Contact;
