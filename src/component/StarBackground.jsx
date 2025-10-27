import React, { useState, useEffect } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors ]= useState ([])
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    generateStars();
    generatemeteors();

    const handResize = () => {
      generateStars();
    };
    window.addEventListener('resize', handResize);

    // Listen for theme changes
    const handleThemeChange = (event) => {
      setIsDarkMode(event.detail.isDark);
    };
    window.addEventListener('themeChange', handleThemeChange);

    // Set initial theme
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme !== 'light');

    return () => {
      window.removeEventListener('resize', handResize);
      window.removeEventListener('themeChange', handleThemeChange);
    };
 },[]);

  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  const generatemeteors = () => {
    const numberOfMeteors = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };


  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {!isDarkMode && (
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(/projects/image.png)',
            opacity: 0.3,
          }}
        />
      )}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${isDarkMode ? 'star-dark' : 'star-light'} animate-pulse-subtle`}
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`${isDarkMode ? 'meteor-dark' : 'meteor-light'} animate-meteor`}
          style={{
            width: meteor.size *50 + 'px',
            height: meteor.size *1 + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDelay: meteor.delay + 's',
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground
