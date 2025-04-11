import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 left-4 z-50 bg-[#1c1f2a] border border-pink-500 text-white p-2 rounded-full hover:scale-105 transition-all"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-purple-400" />}
    </button>
  );
};

export default DarkModeToggle;
