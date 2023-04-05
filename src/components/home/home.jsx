import React from 'react'
import About from '../About/About'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home
