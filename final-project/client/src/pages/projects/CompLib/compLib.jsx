import React, { useState } from 'react';
import './components/Styles.css';
import './components/Navbar.css';
import './components/NavDrawer.css';
import './components/Button.css';
import './components/fab.css';
import './components/img.css';
import './components/spinners.css';

const SpinUp = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      {/* SpinUp CSS Library Title */}
      <div className="title">SpinUp CSS Library</div>

      {/* Navbar Documentation */}
      <div className="navbar-docs">
        {/* ... (rest of the content) */}
      </div>

      {/* Navbar Component */}
      <div className="navbar-container" id="navbar-container"></div>

      {/* Navigation Drawer Documentation */}
      <div className="drawer-docs">
        {/* ... (rest of the content) */}
      </div>

      {/* Navigation Drawer Component */}
      <div className="drawer-container" id="drawer-container"></div>

      {/* Button Documentation */}
      <div className="button-docs">
        {/* ... (rest of the content) */}
      </div>

      {/* Button Component */}
      <div className="button-container" id="button-container"></div>

      {/* FAB Documentation */}
      <div className="fab-docs">
        {/* ... (rest of the content) */}
      </div>

      {/* FAB Component */}
      <div className="fab-container" id="fab-container"></div>

      {/* Image Carousel Documentation */}
      <div className="carousel-docs">
        {/* ... (rest of the content) */}
      </div>

      {/* Image Carousel Component */}
      <div className="carousel-container" id="carousel-container"></div>

      {/* Spinner Title */}
      <div className="sub-header">
        <h2>Loading Spinners</h2>
      </div>

      {/* Spinner Examples */}
      <div className="spinner-example">
        {/* ... (rest of the content) */}
      </div>

      {/* HTML Section */}
      <div className="code-section">
        <h3>HTML</h3>
        <pre className="html" id="spinner-html"></pre>
      </div>

      {/* CSS Section */}
      <div className="code-section">
        <h3>CSS</h3>
        <pre className="css" id="spinner-css"></pre>
      </div>

      {/* JS Section */}
      <div className="code-section">
        <h3>JS</h3>
        <pre className="js" id="spinner-js"></pre>
      </div>
    </div>
  );
};

export default SpinUp;