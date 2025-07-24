import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

function Home({ darkMode }) {
  return (
    <div className={`container-fluid py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="row w-100 align-items-center">
        <div className="col-md-6 text-center text-md-start px-5">
          <motion.h1
            className="display-4 fw-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-primary">Ashutosh Mitra</span>
          </motion.h1>

          <motion.div
            className="my-3 fs-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Typewriter
              options={{
                strings: [
                  'Aspiring Software Developer',
                  'Java | Spring Boot | Angular | React',
                  'AI Enthusiast 💡',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a href="/contact" className="btn btn-outline-primary btn-lg">Hire Me</a>
          </motion.div>
        </div>

        <div className="col-md-6 text-center">
          <motion.img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Developer"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
