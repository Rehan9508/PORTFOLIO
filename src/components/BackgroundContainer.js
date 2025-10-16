import React from 'react';

function BackgroundContainer({ children }) {
  return (
    <div className="page-background-container">
      {children}
    </div>
  );
}

export default BackgroundContainer;
