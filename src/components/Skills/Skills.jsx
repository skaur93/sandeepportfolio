import React from 'react'
import react from '../../assets/img/react.webp'
import javascript from '../../assets/img/javascript.webp'
import mui from '../../assets/img/mui.webp'
import jquery from '../../assets/img/jquery.webp'
import './Skills.css'

function Skills() {
    return (
        <>
            <section className="skills">
                <heading>Skills</heading>
                <div className="flex flex-col w-full max-w-screen-xl mx-auto px-5">
                    <a href="https://www.java.com/en/" target="_blank" className="skillBox">
                        <img src="" alt="java logo" />
                    </a>
                    <a href="https://spring.io/" target="_blank" className="skillBox">
                        <img src="" alt="Spring boot logo" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="skillBox">
                        <img src={javascript} alt="javascript logo" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="skillBox">
                        <img src={jquery} alt="" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="skillBox">
                        <img src={react} alt="" />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="skillBox">
                        <img src={mui} alt="" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Skills
