import './Center.css'
import AllContent from '../Content/content'
import MoreContent from '../Content/MoreContent';
import OutputtingСontent from '../Elements/OutputtingСontent';
import NavbarButtons from '../NavbarButtons/NavbarButtons';
import { useState } from 'react';
import React from 'react';

function Center() {

    const [mycontentType, setContentType] = useState('Press the button')
    // нельзя useState писать вне функции и он всегда должен быть на верзнем уровне. Нужна для динамического изменения контента
    function handleClick(type) {
        setContentType(type)
    }

    return (
        <div className='Center'>
            {/* <OutputtingСontent title={AllContent[0].title} description={AllContent[0].description} />
            <OutputtingСontent  {...AllContent[1]} />
            <OutputtingСontent  {...AllContent[2]} /> */}
            <div className='main-page-slider-container'>
                <div className='main-page-slider-button'>
                    <NavbarButtons isActive={mycontentType === 'FirstImage'} ButtonClicked={() => handleClick('FirstImage')}>Kancelářská budova</NavbarButtons>
                    <NavbarButtons isActive={mycontentType === 'SecondImage'} ButtonClicked={() => handleClick('SecondImage')}>Obchod</NavbarButtons>
                    <NavbarButtons isActive={mycontentType === 'ThirdImage'} ButtonClicked={() => handleClick('ThirdImage')}>Dům</NavbarButtons>
                </div>
                <div className='main-page-slider-content'>
                    <div className='main-page-images'>
                        {/* <p>{MoreContent[mycontentType]}</p> */}
                        {mycontentType === 'FirstImage' && <img className='main-page-images-each-image' src={MoreContent[mycontentType]} alt="Kancelářská budova" />}
                        {mycontentType === 'SecondImage' && <img className='main-page-images-each-image' src={MoreContent[mycontentType]} alt="Obchod" />}
                        {mycontentType === 'ThirdImage' && <img className='main-page-images-each-image' src={MoreContent[mycontentType]} alt="Dům" />}
                    </div>
                </div>
            </div>
            <div className='advantages-of-system'>
                {AllContent.map((acont) => (<OutputtingСontent key={acont.id} {...acont} />))}
            </div>
        </div>
    );
}

export default Center;
