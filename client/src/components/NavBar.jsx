import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CustomizedDropDown from './MenuDropDown';
import './NavBar.css';
import NavLogo from './NavLogo';
import navbarfade from '../components/Images/Vectors/navbarfade.svg';
import navbarfadesplash from '../components/Images/Vectors/navbarfadesplash.png';

function NavBar() {
  return (
    <div>
      <div
        className="navBar"
        // style={{
        //   backgroundImage: `url(${navbarfadesplash})`,
        //   backgroundSize: 'contain'
        // }}
      >
        <div className="navBarLogo"></div>
        <div className="navBarTitle"></div>
        <div className="navBarMenu"></div>
      </div>
    </div>
  );
}

export default NavBar;
