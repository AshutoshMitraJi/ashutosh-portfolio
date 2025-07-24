// src/theme/ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export default ThemeContext;
