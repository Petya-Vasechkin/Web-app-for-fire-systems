import React from 'react';
import './OutputtingСontent.css'

function OutputtingСontent({ title, description }) {
    return (
        <>
            <div className='main-pages-advantages-of-system'>
                <strong>{title}</strong>{description}
            </div>
        </>

    )
}


export default OutputtingСontent;