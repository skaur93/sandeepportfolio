import React from 'react'
import Heading from '../..//components/Heading/Heading';
// import logo from '../../assets/img/aboutme.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="container flex">
                    <div className="left">
                        <img src='' alt="" />
                    </div>
                    <div className="right">
                        <Heading title="About me"></Heading>
                        <p>As a Full Stack Developer, I possess a diverse range of skills and expertise in both front-end and back-end web development. With my extensive knowledge of various programming languages, frameworks, and libraries, I am capable of handling all stages of software development, from concept and planning to deployment and maintenance.

                            As a Full Stack Developer, I have a deep understanding of the different components that make up a web application, including the user interface, server-side logic, and database integration. I am proficient in developing dynamic and interactive web pages using languages such as HTML, CSS, and JavaScript, as well as utilizing different frameworks and libraries such as React, Angular, and Vue.

                            In addition to my technical skills, I possess excellent problem-solving and communication skills, which allows me to work collaboratively with other members of the development team, as well as effectively communicate technical information to non-technical stakeholders.

                            Overall, as a Full Stack Developer, I bring a wealth of knowledge, skills, and experience to any software development project, and am capable of delivering high-quality solutions that meet the needs of the client and end-users.</p>
                        <p>I hold both a Bachelor's degree in information technology and a Postgraduate diploma in computer software.</p>
                        {/* <button className='primaryBtn'>Dowmload CV</button> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
