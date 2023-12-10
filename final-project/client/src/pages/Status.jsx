import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';
import Header from './Header';
import Drawer from './Drawer';
import '../styles/DarkLight.css';
import '../index.css';
import '../styles/Forms.css';

const Status = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [forms, setForms] = useState([]);
  const [areFormsShown, setAreFormsShown] = useState(false);

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  async function getUser() {
    try {
      const res = await fetch('/me/', {
        credentials: 'same-origin',
      });
      if (!res.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await res.json();
      setUserData(data.user); // Update state with the fetched user data
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }

  const getForms = async () => {
    try {
      const res = await fetch('/form/', {
        credentials: 'same-origin',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch user forms');
      }

      const data = await res.json();
      setForms(data.forms); // Update state with the fetched forms
      setLoading(false); // Move setLoading outside of the setTimeout
    } catch (error) {
      console.error('Error fetching user forms:', error.message);
    }
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Fetch user data from the backend
    getUser();
    getForms();
  }, [isDarkMode]);

  const handleFormClick = () => {
    setAreFormsShown(!areFormsShown);
    setShowForm(!showForm);
  };

  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} darkModeToggle={toggleDarkMode} />

      <div className="content">
        <h1>Status Page</h1>
        {loading ? (
          <BarLoader color={'#123abc'} loading={loading} css={style} size={150} />
        ) : (
          <>
            <h3>Forms Found: {forms.length}</h3>
            {userData.name && <div>Hello {userData.name}</div>}
            {forms.length > 0 && (
              <div>
                <button className="form-button" onClick={handleFormClick}>
                  {areFormsShown ? 'Hide Selected Form(s)' : 'View Submitted Form(s)'}
                </button>
                {showForm && areFormsShown && (
                  <div>
                    {forms.map(form => (
                      <div className="form-container" key={form.id}>
                        <h2>Title: {form.projName}</h2>
                        <p>Description: {form.projDescription}</p>
                        <p>Date Needed: {form.projDate}</p>
                        <p>Project style: {form.projStyle}</p>
                        <p>Special Components: {form.projComponents}</p>
                        <p>Status of {form.projName}: {form.status}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!forms.length && (
              <p>
                No submitted form found. <a href="/hireme">Submit a form</a>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Status;