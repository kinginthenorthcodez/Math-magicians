import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <header className="header">
      <nav className="nav">
        <h1 className="text-logo">Math Magician</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
