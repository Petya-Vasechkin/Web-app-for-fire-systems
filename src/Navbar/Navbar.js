import './Navbar.css'
import NavbarButtons from '../NavbarButtons/NavbarButtons';
import React from 'react';

function Navbar({active, onChange}) {

  return (
    <div className='menu'>
      {/* <NavbarButtons isActive={active === 'main'} ButtonClicked = {() => onChange('main')}><span className='name-of-the-web'>APaTSPS</span></NavbarButtons> */}
      <NavbarButtons isActive={active === 'controlpanel'} ButtonClicked = {() => onChange('controlpanel')}>Ovládací panel</NavbarButtons>
      <NavbarButtons isActive={active === 'aboutproject'} ButtonClicked = {() => onChange('aboutproject')}>O projektu</NavbarButtons>
      <NavbarButtons isActive={active === 'aboutsystem'} ButtonClicked = {() => onChange('aboutsystem')}>O systému</NavbarButtons>
      <NavbarButtons isActive={active === 'login'} ButtonClicked = {() => onChange('login')}>Přihlášení</NavbarButtons>
    </div>
  );
}

export default Navbar