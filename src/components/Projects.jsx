import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    dateRange: 'May 2024 - Nov 2024',
    title: 'CI9-CIG Migration',
    institution: 'Accenture',
    description:
      'Architected and implemented SAP Ariba Cloud Integration Gateway (CIG) for seamless end-to-end procurement data exchange. Designed and validated integration workflows, led a zero-downtime Go-Live, and authored comprehensive documentation.',
    skills: 'SAPERPIntegration · CI9Migration · GoLive · CloudIntegration · DataExchange',
  },
  {
    dateRange: 'Jul 2023 - Mar 2024',
    title: 'SAP Ariba AMS',
    institution: 'Accenture',
    description:
      'Engineered and optimized SAP Ariba downstream processes, developed custom analytics dashboards, and designed automated workflow solutions to enhance operational efficiency.',
    skills: 'AribaProcurement · Excel · ServiceNow · GuidedBuying',
  },
  {
    dateRange: 'Jan 2022 - Apr 2022',
    title: 'Bank Transaction Using Face Recognition',
    institution: 'R.M.K Engineering College',
    description:
      'Developed a secure banking system using facial recognition for authentication. Implemented real-time face detection with OpenCV and CNN, built a Flask web interface, integrated SQLite, and automated emails via SMTP.',
    skills: 'OpenCV · SQL · Flask · DBMS · MachineLearning · ComputerVision · SMTP',
  },
  {
    dateRange: 'Feb 2021 - May 2021',
    title: 'Drowsiness Detection with OpenCV',
    institution: 'R.M.K Engineering College',
    description:
      'Created a driver drowsiness detection system leveraging facial recognition and deep learning-based classification, achieving 97% precision in real-time. Developed with Python, OpenCV, CNN, and Flask.',
    skills: 'OpenCV · Python · Flask · MachineLearning · ComputerVision',
  },
  {
    dateRange: 'Dec 2019 - Feb 2020',
    title: 'Court Case Management Web App',
    institution: 'R.M.K Engineering College',
    description:
      'Developed a full-stack web application to streamline court case management. Created a user-friendly interface with HTML, CSS, and JavaScript; used PHP for server-side logic; and designed a MySQL database to manage case records and schedules.',
    skills: 'HTML5 · CSS · SQL · JavaScript',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 px-8 bg-[#0f1117] text-white">
      {/* Optional Neon Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/neon-grid.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4">
        {/* Centered Heading */}
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-pink-500 font-playfair"
        >
          Projects
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical center line (visible on sm+ screens) */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-pink-500 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {projectsData.map((proj, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.12, transition: { duration: 0.15 } }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.2 }}
                variants={cardVariants}
                className={`relative w-full sm:w-1/2 ${idx % 2 === 0 ? 'sm:ml-0 text-left' : 'sm:ml-auto text-right'}`}
              >
                {/* Arrow Connector */}
                {idx < projectsData.length - 1 && (
                  <div className="hidden sm:block absolute left-1/2 top-full transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-pink-500"></div>
                  </div>
                )}
                <div className="bg-[#1c1f2a] rounded-xl p-6 shadow-lg transition-transform hover:scale-105 cursor-pointer">
                  <span className="block text-sm text-green-400 mb-1">{proj.dateRange}</span>
                  <h3 className="text-lg font-semibold text-purple-400 mb-1">{proj.title}</h3>
                  <h4 className="text-sm text-gray-400 italic mb-2">
                    {proj.institution} | {proj.duration}
                  </h4>
                  <p className="text-sm mb-3">{proj.description}</p>
                  <p className="text-xs text-blue-300 font-medium">{proj.skills}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
