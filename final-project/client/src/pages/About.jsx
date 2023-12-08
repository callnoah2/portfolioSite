import React, { useState, useEffect } from 'react';
import Header from './Header';
import Drawer from './Drawer';
import '../styles/DarkLight.css';
import '../index.css';
import MePic from '../images/MePic.jpeg';

const About = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // List of skills
  const skills = [
    'Django', 'React', 'Vite', 'Poetry', 'SQL',
    'JavaScript', 'CSS', 'HTML', 'Java', 'Python'
  ];

  // Split the skills into two columns
  const column1 = skills.slice(0, 5);
  const column2 = skills.slice(5);

  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} darkModeToggle={toggleDarkMode} />
  
      <div className="content">
        <h1>About</h1>
        <div className="content-container">
          <div className="AboutImage">
            <img src={MePic} alt="Me" style={{ width: '100%', maxWidth: '50', height: 'auto' }} />
            <div className="AboutContent2">
              <h3>Mission:</h3>
              <p>My mission is to contribute my skills and expertise to the dynamic fields of web development and cybersecurity, where I aim to create secure and innovative solutions that empower individuals and organizations in the digital landscape.
              </p>
            </div>
          </div>
          <div className="RightSide">
            <h2>Noah Call</h2>
            <div className="AboutContent">
              <h3>Skills:</h3>
              <div style={{ display: 'flex' }}>
                <ul style={{ flex: 1 }}>
                  {column1.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
                <ul style={{ flex: 1 }}>
                  {column2.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
              </div>
              <h3>Education:</h3>
              <div>
                <h4>Utah State University</h4>
                <p>Bachelor's degree, Computer Science, Expected Graduation - Dec 2025</p>
                <h4>Syracuse High School</h4>
                <p>High School Diploma - August 2021</p>
                <p>Student Government - SBO Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;