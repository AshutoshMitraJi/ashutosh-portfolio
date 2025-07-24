import React from 'react'; 
import { motion } from 'framer-motion';

function About({ darkMode }) {
  return (
    <div className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <motion.h2
          className="text-center mb-5 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="row align-items-center">
          {/* Text section */}
          <motion.div
            className="col-md-6 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead">
              Hi, I’m <strong>Ashutosh Mitra</strong> — a passionate and forward-thinking <strong>Software Developer Aspirant</strong>.
            </p>

            <p>
              I specialize in building robust backend systems using <strong>Java</strong> and <strong>Spring Boot</strong>, creating clean, intuitive frontends with <strong>React</strong> and <strong>Angular</strong>.
            </p>

            <p>
              My portfolio is a reflection of my hands-on journey, fueled by real-world projects, hackathons, and discipline.
            </p>

            <p>
              Beyond the code, I’m a relentless problem-solver with a growth mindset. I’ve actively participated in the <strong>GFG160 challenge</strong> and continually explore AI integrations and full-stack solutions.
            </p>

            <p>
              Let’s build, innovate, and shape the future — one solution at a time. 🚀
            </p>
          </motion.div>

          {/* GIF section */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
              alt="About GIF"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '100%', borderRadius: '10px' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
