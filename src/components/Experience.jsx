import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    dateRange: 'Sep 2024 - Jan 2025',
    title: 'Packaged App Development Analyst',
    company: 'Accenture',
    description: `
      Configured and implemented SAP Cloud Integration Gateway to establish seamless integration between SAP ERP and Ariba procurement systems. Established integration workflows in Test Central, ensuring successful data flow for procurement transactions, supplier onboarding, and invoice processing.
    `,
    skills: 'CIG Implementation · SAP ERP Integration · SAP ABAP · Integrating SAP Ariba Applications · Cloud Connectors · Data Exchange · Go-Live Deployment'
  },
  {
    dateRange: 'Dec 2022 - Aug 2024',
    title: 'Packaged App Development Associate',
    company: 'Accenture',
    description: `
      Designed and configured SAP Ariba downstream processes, including Procure-to-Order (P2O), invoice reconciliation, and procurement workflows, ensuring seamless operations. Implemented process automation solutions, reducing manual interventions and improving system efficiency.
    `,
    skills: 'ERP Integration · Cloud Integration Gateway · SAP Ariba Procurement · Ariba Buying and Invoicing · Advanced Excel (Pivot Tables, VLOOKUP) · Guided Buying · Snow Administration'
  },
  {
    dateRange: 'Jan 2021 - Mar 2021',
    title: 'Machine Learning Intern',
    company: 'Smartbridge',
    description: `
      Developed machine learning models using Scikit-learn to analyze project-specific datasets supporting SmartBridge's internal analytics, reporting, and automation initiatives. Automated data preprocessing workflows with Pandas, improving data quality and reducing development time.
    `,
    skills: 'Scikit-Learn · Process Automation · Machine Learning'
  },
  {
    dateRange: 'Jul 2019 - Dec 2019',
    title: 'Research Study Assistant',
    company: 'R.M.K Engineering College',
    description: `
      Collaborated with faculty members on research projects, contributing to paper publications and project development. Supported technical research initiatives, gaining hands-on experience in academic research and team collaboration.
    `,
    skills: 'Technical Writing · Collaborative Work · Analytical Skills'
  }
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 px-6 sm:px-8 lg:px-12 bg-[#0f1117] text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-[url('/neon-grid.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 text-pink-500 font-playfair"
        >
          EXPERIENCE
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center items-center"
          >
            <img
              src="/lapimage.png"
              alt="Laptop illustration"
              className="w-3/4 max-w-sm md:max-w-md mx-auto brightness-110 mix-blend-normal"
            />
          </motion.div>

          <div className="flex-1 relative">
            <div className="hidden sm:block absolute w-[2px] bg-pink-500 top-0 bottom-0 left-2" />
            <div className="space-y-8 sm:pl-10">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={cardVariants}
                  className="relative"
                >
                  {idx < experienceData.length - 1 && (
                    <div className="hidden sm:block absolute -left-2 top-full transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-pink-500" />
                    </div>
                  )}

                  <div className="bg-[#1c1f2a] rounded-xl p-6 shadow-lg transition-transform hover:scale-105 text-left">
                    <span className="block text-sm text-green-400 mb-1">{exp.dateRange}</span>
                    <h3 className="text-lg font-semibold text-purple-400 mb-1">{exp.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{exp.company}</p>
                    <p className="text-sm text-white mb-2 whitespace-pre-line">{exp.description}</p>
                    <p className="text-xs text-blue-300 font-medium whitespace-pre-line">{exp.skills}</p>
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

export default Experience;
