import React from 'react'
import './Hero.css';
import Typewriter from "typewriter-effect";

function Hero() {
    return (
        <div>
            <section className="hero">
                <div className="heroContainer">
                    <h3>Hello I 'm</h3>
                    <h1>
                        <Typewriter options={{ strings: ['full stack dev', 'ui developer'], autoStart: true, loop: true }}></Typewriter>
                    </h1>
                    <p>I am full stack devloper having 5+ years of experince working with different multi national companies.
                        I am full stack devloper having 5+ years of experince working with different multi national companies.
                        I am full stack devloper having 5+ years of experince working with different multi national companies.
                    </p>
                    <button className="primaryBtn">Downlaod Resume</button>
                </div>
            </section>
        </div>
    )
}

export default Hero
