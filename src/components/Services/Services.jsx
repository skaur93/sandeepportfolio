import React from 'react'
import Heading from '../Heading/Heading'
import './Services.css'

import {
    Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined,
    AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube
} from "@mui/icons-material"

function Services() {
    return (
        <>
            <section className="services">
                <div className="container">
                    <Heading title="Services" />
                    <div className="grid3">
                        <div className="box">
                            <i>icon</i>
                            <h3>Creative design</h3>
                            <p>Do web development</p>
                        </div>
                        <div className="box">
                            <i><CropRotate /></i>
                            <h3>Back end </h3>
                            <p>Do web development</p>
                        </div>
                        <div className="box">
                            <i>icon</i>
                            <h3>Front end</h3>
                            <p>Do web development</p>
                        </div>
                        <div className="box">
                            <i><Settings /></i>
                            <h3>Awesome support</h3>
                            <p>Do web development</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
