import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ThemeContext from './theme/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <div className={`d-flex flex-column min-vh-100 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <Navbar />
          
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/skills" element={<Skills darkMode={darkMode} />} />
              <Route path="/resume" element={<Resume darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
