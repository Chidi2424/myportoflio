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
    <nav className={cn("fixed w-full z-40 transition-all duration-300 ",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs " : "py-5"
    )}>
      <div className='container flex items-center justify-between px-4'>
        <a className='text-xl font-bold text-primary flex items-center'href='#hero'>
          <img src='/projects/logo.jpg' alt='Logo' className='w-8 h-8 mr-2 rounded-full' />
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>Vitalis</span>Portfolio
          </span>
        </a>
        {/* desktop nav */}
        <div className='hidden md:flex items-center space-x-8'>
          {navitems.map((item, key) => (
            <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <div className='flex items-center space-x-4 md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-foreground'>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ThemeToggle />
        </div>

        {/* mobile menu */}
        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <ul className='flex flex-col space-y-4 text-xl'>
            {navitems.map((item) => (
              <li key={item.name}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)} className='text-foreground hover:text-primary transition-colors'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* desktop theme toggle */}
        <div className='hidden md:flex items-center'>
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
};

export default Navbar
