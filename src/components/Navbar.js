import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../theme/ThemeContext';
import './ToggleSwitch.css';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">🤵🏻 Ashutosh Mitra</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li className="nav-item"><Link className="nav-link custom-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link custom-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link custom-link" to="/skills">Skills</Link></li>
          <li className="nav-item"><Link className="nav-link custom-link" to="/resume">Resume</Link></li>
          <li className="nav-item"><Link className="nav-link custom-link" to="/contact">Contact</Link></li>
          <li className="nav-item">
            <div className="theme-switch-wrapper">
              <label className="theme-switch">
                <input type="checkbox" onChange={toggleMode} checked={darkMode} />
                <span className="slider round">
                  <span className="icon">{darkMode ? '🌞' : '🌚'}</span>
                </span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
