import React from 'react';
import NavbarButtons from '../NavbarButtons/NavbarButtons';

function NavbarAboutProject({ active, onChange }) {

    return (
        <div className="sidebar">
            <div className="sidebar-buttons">
                <NavbarButtons isActive={active === 'project'} ButtonClicked={() => onChange('project')}>Popis projektu</NavbarButtons>
                <NavbarButtons isActive={active === 'autor'} ButtonClicked={() => onChange('autor')}>Autor</NavbarButtons>
            </div>
            {/* <button type="button" onClick={() => setProjectToAutor('autor')}>Registrace</button> */}
        </div>
    )
}

export default NavbarAboutProject;