import './NavbarButtons.css'
import React from 'react';

function NavbarButtons({ children, ButtonClicked, isActive }) {
    return (
        <button className={isActive ? 'Navbar-button active' : 'Navbar-button'} onClick={ButtonClicked}>
            {children}
        </button>


    );
}

export default NavbarButtons;