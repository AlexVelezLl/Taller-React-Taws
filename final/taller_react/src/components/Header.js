import React, { useState } from 'react';

import pokeApiLogo from '../images/pokeapi_logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <img src={pokeApiLogo} />
      </div>
    </header>
  );
};

export default Header;
