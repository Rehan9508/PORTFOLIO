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
        style={{
          background: isDarkMode 
            ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
            : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          color: "white",
          fontSize: "1.3em"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        }}
      >
        {isDarkMode ? (
          <BsSun className="theme-icon" />
        ) : (
          <BsMoon className="theme-icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

