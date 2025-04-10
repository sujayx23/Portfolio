import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaDatabase, FaAws, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiDjango } from 'react-icons/si';

const skills = [
  { icon: <FaPython size={30} color="#3776AB" />, label: 'Python' },
  { icon: <FaJs size={30} color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <SiMongodb size={30} color="#47A248" />, label: 'MongoDB' },
  { icon: <FaDatabase size={30} color="#f29111" />, label: 'MySQL' },
  { icon: <SiPostgresql size={30} color="#336791" />, label: 'PostgreSQL' },
  { icon: <FaAws size={30} color="#FF9900" />, label: 'AWS' },
  { icon: <FaDocker size={30} color="#0db7ed" />, label: 'Docker' },
  { icon: <SiDjango size={30} color="#092E20" />, label: 'Django' },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-6 sm:px-8 lg:px-24 bg-[#0f1117] text-white mx-auto max-w-[90rem] rounded-xl"
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('/neon-grid.png')] bg-cover bg-center opacity-10 rounded-xl"></div>

      <div className="relative container mx-auto text-center">
        <motion.h2
          whileHover={{ scale: 1.03 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-pink-500 font-playfair"
        >
          About Me
        </motion.h2>

        <motion.p
          whileHover={{ scale: 1.02 }}
          className="mt-0 mb-20 text-xl italic text-yellow-200 max-w-4xl mx-auto"
        >
          💡 "Tech enthusiast powered by curiosity, machine learning, and matchday adrenaline."
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 text-left mt-20 items-start">
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl mx-auto md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-3">Who I Am</h3>
            <p className="text-lg leading-relaxed text-gray-200">
              I’m a technically inclined software engineer with expertise in SAP Ariba integrations
              and enterprise-grade system automation. With 2+ years at Accenture, I’ve delivered
              scalable ERP solutions and procurement workflows—now expanding into intelligent systems,
              data-driven modeling, and applied machine learning.
            </p>
          </motion.div>

          <div className="hidden md:flex justify-center">
            <div className="w-[0.5px] bg-green-300 h-full min-h-[280px]"></div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl mx-auto md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-3 text-left">Life Beyond Code 🎮</h3>
            <p className="text-lg leading-relaxed text-gray-200 text-left">
              When I’m not deep in code, you’ll probably find me on the soccer field or lifting ideas
              (and the occasional dumbbell) at the gym. I love exploring the latest in AI, binge-watching
              gripping TV shows, and connecting over good tech convos or matchday highlights.
              Let’s build, learn, and vibe—together.
            </p>
          </motion.div>
        </div>

        {/* Skills Marquee Section */}
        <div className="mt-32 overflow-hidden relative px-4">
          <motion.h3
            whileHover={{ scale: 1.03 }}
            className="text-center text-3xl sm:text-2xl lg:text-4xl font-bold mb-12 text-pink-500 font-playfair"
          >
            Skills
          </motion.h3>

          <div className="w-full flex justify-center mb-8">
            <div className="h-[2px] w-2/3 bg-green-500"></div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex space-x-8 animate-marquee w-[calc(100%*2)]"
            style={{ animation: 'marquee 15s linear infinite' }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex flex-col items-center justify-center w-32 h-32 border border-yellow-500 rounded-xl shadow-[0_0_10px_rgba(255,20,147,0.5)] bg-[#161b22] transition-transform"
              >
                <div className="mb-2">{skill.icon}</div>
                <p className="text-white text-sm font-semibold">{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="w-full flex justify-center mt-8">
            <div className="h-[2px] w-2/3 bg-green-500"></div>
          </div>
        </div>

        {/* Keyframes for marquee effect */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
