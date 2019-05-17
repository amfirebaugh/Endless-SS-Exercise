import React from 'react';
import logoEndless from '../assets/logoEndless.svg';

const logoStyles = {
  position: 'relative',
  left: '15%'
};

const Nav = () => {
  return (
    <nav className="navContainer">
      <img src={logoEndless} width="110px" style={logoStyles} alt="Endless" />
    </nav>
  );
};

export default Nav;
