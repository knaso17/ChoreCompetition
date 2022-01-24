import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div>
        <img src="/9284fd22cff84bfda4b9437ef7648dc4.png" alt = "Chore Competition Logo" />
      </div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </nav>
  )
}

export default Navbar;
