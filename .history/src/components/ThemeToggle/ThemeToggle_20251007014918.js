import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button 
        className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? (
          <BsSun className="theme-icon" />
        ) : (
          <BsMoon className="theme-icon" />
        )}
      </button>
      <div className="theme-label">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>
  );
};

export default ThemeToggle;
