import React, { useState, useEffect } from 'react';
import Header from './Header';
import Drawer from './Drawer';
import '../styles/DarkLight.css';
import '../index.css';

const Status = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Fetch user data from the backend
    fetchUserData();
  }, [isDarkMode]);

  const fetchUserData = async () => {
    try {
      // Make a request to your backend to get user data
      const response = await fetch('/api/user-data'); // Replace with your API endpoint
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  const handleFormClick = () => {
    setShowForm(!showForm);
  };

  const handleStatusClick = () => {
    setShowStatus(!showStatus);
  };

  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} darkModeToggle={toggleDarkMode} />

      <div className="content">
        <h1>Welcome to My Status PAGE</h1>
        <p>This is the Status Content</p>

        {userData.name && <p>Hello {userData.name}</p>}

        {userData.submittedForm && (
          <div>
            <button onClick={handleFormClick}>View Submitted Form</button>
            {showForm && (
              <div>
                {/* Display the submitted form details */}
                <p>Project Name: {userData.submittedForm.project_name}</p>
                {/* Add more form fields as needed */}
              </div>
            )}
          </div>
        )}

        {userData.status && (
          <div>
            <button onClick={handleStatusClick}>View Status</button>
            {showStatus && <p>Status: {userData.status}</p>}
          </div>
        )}

        {!userData.submittedForm && <p>No submitted form found. <a href="/hire-me">Submit a form</a></p>}
      </div>
    </div>
  );
};

export default Status;