import React from 'react'
import Heading from '../..//components/Heading/Heading';
import react from '../../assets/img/react.webp'
import javascript from '../../assets/img/javascript.png'
import mui from '../../assets/img/mui.webp'
import jquery from '../../assets/img/jquery.webp'
import java from '../../assets/img/java.png'
import spring from '../../assets/img/spring.png'
import html from '../../assets/img/html5.png'
import css from '../../assets/img/css3.png'
import './Skills.css'

function Skills() {
    return (
        <>
            <section className="skills">
                <Heading title="Skills"></Heading>
                <div className="allSkills">
                    <a href="https://www.java.com/en/" target="_blank" className="skillBox">
                        <img src={java} alt="java logo" />
                    </a>
                    <a href="https://spring.io/" target="_blank" className="skillBox">
                        <img src={spring} alt="spring logo" />
                    </a>
                    <a href="https://www.w3.org/html/" target="_blank" className="skillBox">
                        <img src={html} alt="html logo" />
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" className="skillBox">
                        <img src={css} alt="css logo" />
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
