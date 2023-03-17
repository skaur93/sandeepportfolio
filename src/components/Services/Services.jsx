import React from 'react'
import Heading from '../Heading/Heading'
import './Services.css'

function Services() {
    return (
        <>
            <section className="services">
                <div className="container">
                    <Heading title="Services" />
                    <div className="container grid">
                        <i>icon</i>
                        <h3>Web development</h3>
                        <p>Do web development</p>
                    </div>
                    <div className="container grid">
                        <i>icon</i>
                        <h3>Web development</h3>
                        <p>Do web development</p>
                    </div>
                    <div className="container grid">
                        <i>icon</i>
                        <h3>Web development</h3>
                        <p>Do web development</p>
                    </div>
                    <div className="container grid">
                        <i>icon</i>
                        <h3>Web development</h3>
                        <p>Do web development</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
