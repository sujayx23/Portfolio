import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide navbar on scroll down, show on scroll up
      if (currentY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-end py-4 px-8 gap-8 text-sm font-medium uppercase">
        {['ABOUT', 'EXPERIENCE', 'EDUCATION', 'PROJECTS', 'CERTIFICATIONS'].map((sec) => (
          <button
            key={sec}
            onClick={() => scrollTo(sec.toLowerCase())}
            className="bg-transparent border-none outline-none 
                       hover:text-pink-400 transition-transform duration-200 
                       hover:scale-105 focus:outline-none text-white"
          >
            {sec}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
