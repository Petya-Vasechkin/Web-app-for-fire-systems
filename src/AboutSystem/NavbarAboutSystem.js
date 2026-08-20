import React from 'react';
import NavbarButtons from '../NavbarButtons/NavbarButtons';

function NavbarAboutSystem({ active, onChange }) {

    return (
        <div className="navbar-about-system">
            <div className="navbar-about-system-buttons">
                <NavbarButtons isActive={active === 'functionaloptions'} ButtonClicked={() => onChange('functionaloptions')}>Funkční možnosti</NavbarButtons>
                <NavbarButtons isActive={active === 'technicalspecifications'} ButtonClicked={() => onChange('technicalspecifications')}>Technické specifikace</NavbarButtons>
                <NavbarButtons isActive={active === 'userbenefits'} ButtonClicked={() => onChange('userbenefits')}>Výhody uživatelů</NavbarButtons>
            </div>
        </div>
    )
}

export default NavbarAboutSystem;