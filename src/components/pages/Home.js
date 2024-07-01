import '../../App.css';
import React from 'react';
import Main from '../Main';
import About from '../About';
import Experience from '../Experience';
import Contact from '../Contact';
import Projects from '../Projects';

function Home(){
    return (
        <>
         <section id="home">
                <Main/>
            </section>
            <section id="about">
                <About />
            </section>
            <section id="experience">
                <Experience />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact-me">
                <Contact/>
            </section>
        </>
    )
}

export default Home