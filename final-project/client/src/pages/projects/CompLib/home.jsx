import React from 'react';
import '../components/Styles.css';
import '../components/Navbar.css';

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        {/* ... (head content) */}
      </head>
      <body>
        <div className="container">
          <nav className="navbar">
            {/* ... (navbar content) */}
          </nav>
        </div>
        <script src="../app.js"></script>
        <script src="../components/Navbar.js"></script>
      </body>
    </html>
  );
};

export default HomePage;