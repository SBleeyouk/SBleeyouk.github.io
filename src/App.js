import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Saetbyeol from './components/Saetbyeol';
/*
import About from './About';
import Projects from './Projects';
*/
function App() {
  return (
    <Router>
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Navigate to="/saetbyeol" />} />

        {/* Saetbyeol page */}
        <Route path="/saetbyeol" element={<Saetbyeol />} />
        
      </Routes>
    </Router>
  );
}

export default App;
