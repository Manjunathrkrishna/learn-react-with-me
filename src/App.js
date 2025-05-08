import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Learning from './pages/Learning';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      {/* <Header /> */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Router>
        <Routes>
          <Route path="/" element={<Learning />} />

          {/* <Route path="/learn" element={<Learning searchTerm={searchTerm} />} /> */}

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/learn" element={<Learning />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
