import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import './App.css';

function App() {
  useEffect(() => {
      AOS.init({
          duration: 1000, // Animation duration
          delay: 200, // Delay between animations
          once: false // Ensures animation happens every time the element comes into view
      });
  }, []);

  return (
      <div>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
