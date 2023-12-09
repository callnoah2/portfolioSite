import React, { useState } from 'react';
import '../styles/Forms.css';

const HireMeForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [dateNeededBy, setDateNeededBy] = useState('');
  const [styleColorPreferences, setStyleColorPreferences] = useState('');
  const [specificComponents, setSpecificComponents] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (!projectName || !projectDescription || !dateNeededBy) {
      displayErrorMessage('Please fill out required fields.');
      return;
    }

    // Make a POST request to your Django API endpoint with the form data
    // Update state or show a success message as needed

    // Clear form fields
    setProjectName('');
    setProjectDescription('');
    setDateNeededBy('');
    setStyleColorPreferences('');
    setSpecificComponents('');

    // Display success message
    displayErrorMessage('Form submitted successfully!');
  };

  const displayErrorMessage = (message) => {
    errorMessage.style.color ='white'
    setErrorMessage(message);
  };

  return (
    <div className="form-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label" htmlFor="projectName">*Project Name:</label>
          <input className="form-input" type="text" id="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
        </div>

        <label className="form-label" htmlFor="dateNeededBy">*Date Needed By:</label>
        <input className="form-input" type="date" id="dateNeededBy" value={dateNeededBy} onChange={(e) => setDateNeededBy(e.target.value)} />

        <div>
          <label className="form-label" htmlFor="projectDescription">*Project Description:</label>
          <textarea className="form-input" id="projectDescription" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} required />
        </div>

        <label className="form-label" htmlFor="styleColorPreferences">Style/Color Preferences:</label>
        <input className="form-input" type="text" id="styleColorPreferences" value={styleColorPreferences} onChange={(e) => setStyleColorPreferences(e.target.value)} />

        <label className="form-label" htmlFor="specificComponents">Specific Components:</label>
        <textarea className="form-input" id="specificComponents" value={specificComponents} onChange={(e) => setSpecificComponents(e.target.value)} />

        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HireMeForm;