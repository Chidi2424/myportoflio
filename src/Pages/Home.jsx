import React from 'react';
import StarBackground from '../component/StarBackground';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Skills from '../component/Skills';
import Project from '../component/Project';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <StarBackground />
        <Navbar />

        {/* Main content */}
        <main className='relative z-10'>
          <Hero />
          <About />
          <Skills/>
          <Project/>
          <Contact/>
          <Footer/>
        </main>
    </div>
  );
};

export default Home;
