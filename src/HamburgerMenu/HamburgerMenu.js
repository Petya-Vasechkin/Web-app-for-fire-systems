import React, { useState } from 'react';
import './HamburgerMenu.css';
import NavbarButtons from '../NavbarButtons/NavbarButtons';

const HamburgerMenu = ({ active, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu-container">
      <div className={`hamburger-menu ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <NavbarButtons isActive={active === 'objectmanagement'} ButtonClicked={() => onChange('objectmanagement')}>Správa objektů</NavbarButtons>
          <NavbarButtons isActive={active === 'monitoring'} ButtonClicked={() => onChange('monitoring')}>Monitorování</NavbarButtons>
          <NavbarButtons isActive={active === 'analytics'} ButtonClicked={() => onChange('analytics')}>Analytika</NavbarButtons>
          <NavbarButtons isActive={active === 'equipmentmanagement'} ButtonClicked={() => onChange('equipmentmanagement')}>Správa vybavení</NavbarButtons>
          <NavbarButtons isActive={active === 'training'} ButtonClicked={() => onChange('training')}>Školení</NavbarButtons>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
