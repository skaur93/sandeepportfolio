import React from 'react'
import About from '../About/About'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

function Home() {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </>
    )
}

export default Home
