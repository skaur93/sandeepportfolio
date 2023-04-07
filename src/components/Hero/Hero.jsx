import React from 'react'
import './Hero.css';
import Typewriter from "typewriter-effect";

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="heroContainer">
                    <h3 data-aos='fade-up'>Hello World! I 'm</h3>
                    <h1>
                        <Typewriter options={{ strings: ['full stack dev', 'ui developer'], autoStart: true, loop: true }}></Typewriter>
                    </h1>
                    <p data-aos='fade-left'>I am full stack devloper having 5+ years of experince working with different multi national companies.
                        I am full stack devloper having 5+ years of experince working with different multi national companies.
                        I am full stack devloper having 5+ years of experince working with different multi national companies.
                    </p>
                    <button className="primaryBtn" data-aos='fade-up'>Download Resume</button>
                </div>
            </section>
        </>
    )
}

export default Hero
