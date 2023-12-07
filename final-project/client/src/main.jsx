import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFoundPage from './pages/NotFoundPage';
import HireMe from './pages/HireMe';
import Status from './pages/Status';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={ <IndexPage />} />
        <Route path="/home" element={ <IndexPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/status" element={<Status />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);