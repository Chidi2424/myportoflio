import React from 'react';
import { ArrowDown } from 'lucide-react';


const Hero = () => {
  return (
    <section id="hero" className='min-h-screen flex items-center justify-center px-4 pt-16 md:pt-20'>
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight'>
            <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
              <span className='text-primary opacity-0 animate-fade-in-delay-1 ml-2'>Makuo</span>
                <span className='text-gradien ml-2 opacity-0 animate-fade-in-delay-1'>Egwuonwu</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 px-4'>
            I create stellar web experience with modern technologies
            Specializing in frontend and backend  <span className='text-primary opacity-0 animate-fade-in-delay-1'>(Fulstack)</span> development,I build interfacs that are functional and beautiful.
          </p>
          <div className='pt-4 opacity-0 animate-fade-in-delay-2'>
            <a href='#projects' className='cosmic-button'>
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
        <ArrowDown className='h-5 w-5 text-primary' />
      </div>
      {/* <div className='text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-glow mb-4'>
          Welcome to AbaTech Portfolio
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground'>
          Building amazing web experiences
        </p>
      </div> */}
    </section>
  );
};

export default Hero;
