import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Button';
import { Button } from './Button';
import './Button.css';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <ScrollLink 
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1250}
                        className="navbar-logo hover:text-sky-400"
                        onClick={closedMobileMenu}
                    >
                        Dev Patel
                    </ScrollLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item cursor-pointer'>
                            <ScrollLink
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className='nav-links'
                                onClick={closedMobileMenu}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className='nav-item cursor-pointer'>
                            <ScrollLink
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className='nav-links'
                                onClick={closedMobileMenu}
                            >
                                Resume
                            </ScrollLink>
                        </li>
                        <li className='nav-item cursor-pointer'>
                            <ScrollLink
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className='nav-links'
                                onClick={closedMobileMenu}
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className='nav-item cursor-pointer'>
                            <ScrollLink
                                to="contact-me"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                className='nav-links-mobile'
                                onClick={closedMobileMenu}
                            >
                                Contact Me
                            </ScrollLink>
                        </li>
                    </ul>
                    {button && (
                        <ScrollLink
                            to="contact-me"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className='btn-mobile'
                            onClick={closedMobileMenu}
                        >
                            <Button buttonStyle='btn--outline'>CONTACT ME</Button>
                        </ScrollLink>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
