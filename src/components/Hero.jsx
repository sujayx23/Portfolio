import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 lg:px-10
                 bg-gradient-to-b from-[#131325] to-[#0f1117] text-white overflow-hidden"
    >
      {/* Neon Grid Overlay (Optional) */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/neon-grid.png')] bg-cover bg-center opacity-10"></div>

      {/* Left Content */}
      <div className="flex-1 container mx-auto px-4 text-left z-10 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug text-white"
        >
          Hello,<br />
          This is <span className="text-pink-500">SUJAY NITHISH</span>,<br />
          I’m a <span className="text-green-400">Professional Software Engineer</span>.
        </motion.h1>

        {/* Who Am I Section */}
        
        {/* Social Icons (GitHub, LinkedIn, Mail) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-12 text-2xl mt-4"
        >
          <a
            href="https://github.com/sujayx23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sujay-nithish-h-8363ba247"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nithishsujay17@gmail.com"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Resume Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          href="/Sujay_Nithish_Resume.pdf"
          download
          className="inline-block px-6 py-3 mt-6 bg-gradient-to-r from-pink-500 to-purple-600
                     text-white font-semibold rounded-full drop-shadow-md hover:scale-105 transition-transform"
        >
          GET RESUME <FaFileDownload className="inline ml-2" />
        </motion.a>
      </div>

      {/* Right Code Snippet */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="hidden md:flex flex-1 justify-end z-10 px-4"
      >
        <motion.div
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="max-w-2xl bg-[#161b22] p-6 rounded-xl shadow-lg font-mono text-base text-[#c9d1d9]
                     leading-relaxed border border-pink-500 transition-all whitespace-pre-wrap break-words"
        >
          <span className="text-pink-400">const</span> coder = {'{\n'}
          &nbsp;&nbsp;<span className="text-purple-400">name:</span>{' '}
          <span className="text-green-400">'Sujay Nithish'</span>,{'\n'}
          &nbsp;&nbsp;<span className="text-purple-400">skills:</span>{' '}
          <span className="text-yellow-400">['Python', 'Machine Learning', 'React', 'SQL', 'CIG']</span>,{'\n'}
          &nbsp;&nbsp;<span className="text-purple-400">hardWorker:</span> <span className="text-blue-400">true</span>,{'\n'}
          &nbsp;&nbsp;<span className="text-purple-400">quickLearner:</span> <span className="text-blue-400">true</span>,{'\n'}
          &nbsp;&nbsp;<span className="text-purple-400">problemSolver:</span> <span className="text-blue-400">true</span>,{'\n'}
          &nbsp;&nbsp;<span className="text-purple-400">hireable:</span> <span className="text-pink-400">function</span>() {'{\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> ({'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.hardWorker</span> &&{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.problemSolver</span> &&{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.skills.length</span> {'>='} 5{'\n'}
          &nbsp;&nbsp;&nbsp;&nbsp;);{'\n'}
          &nbsp;&nbsp;}{'\n'}
          {'};'}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
