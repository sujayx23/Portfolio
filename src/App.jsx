import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education'; // ⬅️ Moved up here
import Projects from './components/Projects';
import Certifications from './components/Certifications';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0f1117] text-white">
      {/* Neon overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/neon-grid.png')] bg-cover bg-center opacity-10"></div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education /> {/* ⬅️ Now right after Experience */}
      <Projects />
      <Certifications />

      <footer className="text-center py-4 bg-black bg-opacity-70">
        © {new Date().getFullYear()} Sujay Nithish Hemakumar. All rights reserved.
      </footer>
    </div>
  );
}
