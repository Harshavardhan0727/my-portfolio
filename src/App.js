import React, { useEffect } from 'react';
import AOS from 'aos'; 
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Recentworks from './components/Recentworks'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; 
import './App.css';

function App() {
  useEffect(() => {
      AOS.init({
          duration: 1000, 
          delay: 200, 
          once: false 
      });
  }, []);

  return (
      <div>
            <Header />
            <Hero />
            <About />
            <Technologies />
            <Recentworks/>
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
