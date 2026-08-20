import React, { useState } from 'react';
import './AboutProject.css';
import NavbarAboutProject from './NavbarAboutProject';

function AboutProject() {
    const [ProjectToAutor, setProjectToAutor] = useState('project');
    return (
        <div className="about-border">
            <div className="about-container">
                <NavbarAboutProject active={ProjectToAutor} onChange={(current) => setProjectToAutor(current)} />
                <div className='content'>
                    {ProjectToAutor === 'project' && (
                        <>
                            <div className="content-about-project">
                                <h1>O projektu</h1>
                                <p>
                                    Funkce vyvíjeného systému zahrnuje možnost vizualizace a úprav požárních plánů, přesouvání a přidávání prvků požární bezpečnosti, jako jsou ruční hasicí přístroje, hlásiče kouře, automatické hasicí systémy, a také sledování stavu zařízení systému a v případě potřeby upozornění odpovědných osob na potřebu údržby.
                                </p>
                                <p>
                                    Hlavními cíli tohoto systému jsou: zvýšení efektivity požárních služeb, minimalizace rizik požárů a jejich následků prostřednictvím včasného informování a školení personálu a zkrácení doby reakce na možné incidenty.
                                </p>
                                <p>
                                    Tento systém také pomůže optimalizovat náklady automatizací všech procesů evidence a údržby požárního vybavení, to pomůže snížit pravděpodobnost chyb a také zvýšit spolehlivost celého komplexu opatření určených k zajištění požární bezpečnosti.
                                </p>
                            </div>
                        </>
                    )}
                    {ProjectToAutor === 'autor' && (
                        <>
                            <div className="content-about-autor">
                                <h1>Autor</h1>
                                <p>Pavel Metelev - student magisterského studia v oboru Informatika na České zemědělské univerzitě v Praze</p>
                                <p>LinkedIn: <a className="content-about-autor-link" href='https://www.linkedin.com/in/pavel-metelev/' target="_blank" rel="noopener noreferrer" alt="my-linkedin">https://www.linkedin.com/in/pavel-metelev/</a></p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AboutProject;
