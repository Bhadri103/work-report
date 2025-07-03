import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainShowcase from './components/MainShowcase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/showcase" element={<MainShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;