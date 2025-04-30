import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Learning from './pages/Learning';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Router>
      <Routes>
        <Route path="/" element={<Learning />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/learn" element={<Learning />} /> */}
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}

export default App;
