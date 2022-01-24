import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div>
        <img src="/9284fd22cff84bfda4b9437ef7648dc4.png" alt = "Chore Competition Logo" />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/tournaments">Tournaments</NavLink>
      </nav>
    </div>
  )
}

export default Navbar;
