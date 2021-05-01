import React from 'react';
import {Link} from "react-router-dom";

function Hero() {

    return (
        <section className="hero">
            <div className="container flex">
                
                <p className="showcase">
                    Assignment Practice Questions
                </p>
                <p className="showcase-free">
                    Oh and did we mention its completely free?
                </p>

                <div className="call-to-action-buttons flex">
                    <Link to="/courses"><button>Find your course</button></Link>
                </div>
                
            </div>
        </section>
    )
}

export default Hero
