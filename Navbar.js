import React from 'react';
import { link } from 'react-router-dom';

function Navbar() { 
  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi portafolio</div>
      <ul className="navbar-links"> 
        <li><link to="/">home</link></li>
        <li><link to="/about">Sobre Mí</link></li>
        <li><link to="/projects">Proyectos</link></li>
        <li><link to="/contact">Contáctame</link></li>
      </ul>
    </nav>
  );
}

export default Navbar;   

