import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    dateRange: 'Jan 2025 - May 2026',
    title: "Master's degree, Computer Science",
    institution: 'University of Illinois Urbana-Champaign',
    description:
      'Currently pursuing a Master of Computer Science (MCS) at UIUC, specializing in machine learning, AI, and data science. Coursework includes Applied Machine Learning, Text Information Systems, and Hot Topics in Data Management.',
    skills:
      'Skills: Natural Language Processing (NLP) · Matplotlib · Data Mining · NumPy · Machine Learning · Scikit-Learn · Large-scale data management and processing · Pandas',
  },
  {
    dateRange: '2018 - 2022',
    title: 'Bachelor of Engineering - BE, Computer Science',
    institution: 'R.M.K Engineering College',
    description:
      'Completed undergraduate studies in Computer Science Engineering. Gained experience in full-stack development, databases, and AI systems.',
    skills:
      'Skills: C++ · SMTP · SQL · Python · C · AI · Machine Learning · Flask · JavaScript · Java · DBMS · Computer Vision · OpenCV · Flutter',
  },
  {
    dateRange: 'Jun 2017 - Apr 2018',
    title: 'HSC',
    institution: 'Maharishi Vidya Mandir Senior Secondary School',
    description:
      'Completed higher secondary education with focus on mathematics, physics, and computer science.',
    skills: '',
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-16 px-6 sm:px-8 lg:px-12 bg-[#0f1117] text-white"
    >
      {/* Optional Neon Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/neon-grid.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-pink-500 font-playfair"
        >
          Education
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex flex-1 justify-center items-center"
          >
            <img
              src="/education.png"
              alt="Education illustration"
              className="w-3/4 max-w-sm md:max-w-md mx-auto brightness-110"
            />
          </motion.div>

          <div className="flex-1 relative">
            <div className="hidden sm:block absolute w-[2px] bg-pink-500 top-0 bottom-0 left-2" />

            <div className="space-y-10 sm:pl-10">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative"
                >
                  {idx < educationData.length - 1 && (
                    <div className="hidden sm:block absolute -left-2 top-full transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-pink-500" />
                    </div>
                  )}
                  <div className="bg-[#1c1f2a] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border border-pink-500">
                    <span className="block text-sm text-green-400 mb-1">{edu.dateRange}</span>
                    <h3 className="text-lg font-semibold text-purple-400 mb-1">{edu.title}</h3>
                    <p className="text-white font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                    {edu.skills && (
                      <p className="text-sm text-blue-300 mt-2 whitespace-pre-wrap">{edu.skills}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
