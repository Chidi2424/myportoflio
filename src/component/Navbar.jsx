import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navitems = [
    { name: 'Home', href: "#hero" },
    { name: 'About', href: "#about" },
    { name: 'Skills', href: "#skills" },
    { name: 'Projects', href: "#projects" },
    { name: 'Contact', href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn("fixed w-full z-40  duration-300 ",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs " : "py-5"
      )}>
        <div className='container flex items-center justify-between px-4'>
          <a className='text-xl font-bold text-primary flex items-center'href='#hero'>
            <img src='/projects/logo.jpg' alt='Logo' className='w-8 h-8 mr-2 rounded-full' />
            <span className='relative z-10'>
              <span className='text-glow text-foreground'>AbaTech</span>Portfolio
            </span>
          </a>
          {/* desktop nav */}
          <div className='hidden md:flex items-center space-x-8'>
            {navitems.map((item, key) => (
              <button
                key={key}
                onClick={() => scrollToSection(item.href)}
                className='text-foreground/80 hover:text-primary transition-colors duration-300'
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* mobile nav */}
          <div className='flex items-center space-x-4 md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-foreground'>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <ThemeToggle />
          </div>

          {/* desktop theme toggle */}
          <div className='hidden md:flex items-center'>
            <ThemeToggle />
          </div>

        </div>
      </nav>

      {/* mobile menu */}
      <div className={cn("fixed top-0 right-0 w-64 h-full bg-primary/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button onClick={() => setIsMenuOpen(false)} className='absolute top-6 right-6 text-foreground hover:text-white transition-colors'>
          <X size={32} />
        </button>
        <ul className='flex flex-col space-y-4 text-lg'>
          {navitems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className='text-foreground hover:text-white transition-colors'
                >
                  {item.name}
                </button>
              </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar
