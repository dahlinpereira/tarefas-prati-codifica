import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>TMDB Movie Search</h1>
      </Link>
      <Link to="/favorites">Meus Favoritos</Link>
    </nav>
  );
};

export default Navbar;