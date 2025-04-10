import React from 'react';
import { motion } from 'framer-motion';

const certificationsData = [
  {
    title: 'SAP Certified Implementation Consultant for Managed Gateway for Spend & Business Network',
    provider: 'SAP',
    issued: 'Aug 2023',
    skills: ['Integrating', 'DataExchange', 'Migration', 'CloudIntegration'],
  },
  {
    title: 'Full-Stack Web Development',
    provider: 'Udemy',
    issued: '2020',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Cloud Computing',
    provider: 'Coursera',
    issued: 'Dec 2019',
    skills: ['AWS', 'CloudOps', 'Serverless'],
  },
  {
    title: 'Database Management System',
    provider: 'NPTEL',
    issued: 'Nov 2019',
    skills: ['DBMS', 'SQL', 'Scripting'],
  },
  {
    title: 'Artificial Intelligence',
    provider: 'Coursera',
    issued: 'Jul 2019',
    skills: ['AI', 'Vision', 'PyTorch'],
  },
  {
    title: 'Java Programming',
    provider: 'NPTEL',
    issued: 'Jun 2019',
    skills: ['Java', 'OOP', 'Multithreading'],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-[#0f1117] text-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-playfair 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent cursor-pointer"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#1c1f2a] rounded-xl p-6 shadow-lg text-left cursor-pointer transition-transform"
            >
              <h3 className="text-lg font-semibold text-purple-300 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 italic mb-2">
                {cert.provider} | Issued {cert.issued}
              </p>
              <p className="text-xs text-blue-300 font-medium">
                Skills: {cert.skills.join(' • ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
