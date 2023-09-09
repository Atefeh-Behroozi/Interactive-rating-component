import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Rating from './components/Rating';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Rating />} />
        <Route path="/thankyou/:rating" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
