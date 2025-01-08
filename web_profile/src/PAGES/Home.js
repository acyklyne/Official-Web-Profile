import React from 'react';
import Hero from '../COMPONENTS/SECTIONS/Hero';
import About from '../COMPONENTS/SECTIONS/About';
import Skills from '../COMPONENTS/SECTIONS/Skills';
import Experience from '../COMPONENTS/SECTIONS/Experience';
import Projects from '../COMPONENTS/SECTIONS/Projects';
import Contact from '../COMPONENTS/SECTIONS/Contact';

const Home = () => {
  return (
    <main className="custom-bg-primary">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;