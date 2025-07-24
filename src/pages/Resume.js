import React from 'react';
import { motion } from 'framer-motion';

function Resume({ darkMode }) {
  return (
    <div className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          My Resume
        </motion.h2>

        <p className="mb-4">
          Click below to preview my resume (PDF opens in new tab):
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/AshutoshMitraJi/resume/blob/main/AshutoshMitraResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Preview Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
