import React from 'react';
import '../styles/Header.css';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header-wrapper">
      <h1 className="header-title">🧠 React Learning Hub</h1>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

    </header>
  );
}

export default Header;
