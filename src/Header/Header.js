import Clock from '../Elements/Clock';
import './Header.css';
import My_R_logo from '../images/r_logo.jpeg'
import React from 'react';

function Header({ onChange }) {
  const LogoClickHeader = () => {
    onChange('main');
  };

  return (
    <header className="App-header">
      <div className="header-logo-and-text" onClick={LogoClickHeader}>
        <img src={My_R_logo} alt="logo" className='my-r-logo-header'></img>
        <div className="logo-text-container">
          Analýza připravenosti a technického stavu požárních systémů
        </div>
      </div>
      <div className="clock-container">
        <Clock />
      </div>
    </header>
  );
}

export default Header;