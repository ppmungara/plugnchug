import React from 'react'
import {useState} from 'react';

function Plugnchug() {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            {isVisible && <Message setIsVisible={setIsVisible}/>}
        </>
    )
}

function Message ({setIsVisible}) {
    return (
        <div className="banner">
            <div className="container flex">
                <span>
                    <p className="banner__message">
                        For a better experience of our website, please use a larger screen.
                    </p>
                </span>
                <button className='banner__close' onClick={() => {
                    setIsVisible(false);
                }}>X</button>
            </div>
        </div>
    )
}

export default Plugnchug
