// import BuildingDesigner from '../Elements/BuildingDesigner'
import React, { useState } from 'react';
import './CreateASchema.css'
import My_R_logo from '../images/r_logo.jpeg'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import ObjectManagement from '../ControlPanelElements/ObjectManagement/ObjectManagement';




function CreateASchema() {
    const [HamburgerMenuTab, setHamburgerMenuTab] = useState('main');
    return (
        <>
            <div className="controlpanel-container">
                <div className="navbar-controlpanel">
                    <div className="logo-and-search">
                        <img src={My_R_logo} alt="logo" className='my-r-logo-controlpanel' />
                        <input type="text" className='input-search-controlpanel' placeholder="Zadejte název budovy, kterou chcete vyhledat" />
                    </div>
                    <HamburgerMenu active={HamburgerMenuTab} onChange={(current) => setHamburgerMenuTab(current)} />
                </div>
                <div className="main-content-controlpanel">

                    {HamburgerMenuTab === 'main' && (
                        <>
                            <p>Pokračujte výběrem nebo vytvořením budovy</p>
                        </>
                    )}
                    {HamburgerMenuTab === 'objectmanagement' && (
                        <>
                            <ObjectManagement />
                        </>
                    )}
                    {HamburgerMenuTab === 'monitoring' && (
                        <>
                            <p>monitoring will be soon here</p>
                        </>
                    )}
                    {HamburgerMenuTab === 'analytics' && (
                        <>
                            <p>analytics will be soon here</p>
                        </>
                    )}
                    {HamburgerMenuTab === 'equipmentmanagement' && (
                        <>
                            <p>equipmentmanagement will be soon here</p>
                        </>
                    )}
                    {HamburgerMenuTab === 'training' && (
                        <>
                            <p>training will be soon here</p>
                        </>
                    )}
                </div>
            </div>
            {/* <BuildingDesigner /> */}
        </>
    )
}

export default CreateASchema;