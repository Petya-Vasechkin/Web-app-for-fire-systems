import React, { useState } from 'react';
import './AboutSystem.css';
import NavbarAboutSystem from './NavbarAboutSystem';

function AboutSystem() {
    const [AboutSystemTab, setAboutSystemTab] = useState('functionaloptions');
    return (
        <div className="about-system-border">
            <div className="about-system-container">
                <NavbarAboutSystem active={AboutSystemTab} onChange={(current) => setAboutSystemTab(current)} />
                <div className='about-system-content'>
                    {AboutSystemTab === 'functionaloptions' && (
                        <>
                            <div className="content-about-system-functionaloptions">
                                <div className='main-function'>
                                    <h3>Autorizace a autentizace</h3>
                                    <p>Možnost registrace a přihlášení do systému s různými úrovněmi přístupu (administrátor, hasič atd.)</p>
                                </div>
                                <div className='main-function'>
                                    <h3>Správa objektů</h3>
                                    <p>Přidávání, úprava a odstraňování objektů (schémat hasicího systému) a základních informací o nich</p>
                                </div>
                                <div className='main-function'>
                                    <h3>Reporty a analýzy</h3>
                                    <p>Generování reportů o stavu požárního systému</p>
                                </div>
                            </div>
                        </>
                    )}
                    {AboutSystemTab === 'technicalspecifications' && (
                        <>
                            <div className="content-about-system-technicalspecifications">
                                <div className='main-function'>
                                    <h3>Aktuální verze</h3>
                                    <p>1.0.1</p>
                                </div>
                                <div className='main-function'>
                                    <h3>Aktuální možná verze</h3>
                                    <p>Máte aktuální verzi systému</p>
                                </div>
                            </div>
                        </>
                    )}
                    {AboutSystemTab === 'userbenefits' && (
                        <>
                            <div className="content-about-system-userbenefits">
                                <div className='main-function'>
                                    <h3>Hasič</h3>
                                    <p>data ověření senzorů a umístění prvků požárního systému v budově</p>
                                </div>
                                <div className='main-function'>
                                    <h3>Administrátor</h3>
                                    <p>Plánování údržby</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AboutSystem;