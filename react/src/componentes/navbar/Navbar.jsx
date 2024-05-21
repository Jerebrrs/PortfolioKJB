
import React, { useState } from 'react';
import stylos from './Menu.module.css';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className={stylos.container}>
            <div className={stylos.logo}>
                <img className={stylos.imgLogo} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhmd3U2NXR5czhvbzRkczR5bTZtYmR5NHpmYmZyeGVmMTI3MjVncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/kAm4u0lhDCmXnugz6p/giphy.gif" />
            </div>
            <ul className={`${stylos.navlist} ${menuOpen ? stylos.open : ''}`}>
                <ul className={`${stylos.navlist} ${menuOpen ? stylos.open : ''}`}>
                    <li>
                        <Link to="inicio" spy={true} smooth={true} offset={-70} duration={850}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="sobremi" spy={true} smooth={true} offset={-70} duration={850}>Sobre MI</Link>
                    </li>
                    <li>
                        <Link to="proyectos" spy={true} smooth={true} offset={-50} duration={850}>Proyectos</Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} offset={-50} duration={850}>Skills</Link>
                    </li>
                    <li>
                        <Link to="contacto" spy={true} smooth={true} offset={-70} duration={850}>Contacto</Link>
                    </li>
                </ul>
            </ul>
            <div className={stylos.rigchcontent}>
                <div className={stylos.bxmenu} id='menu-icon' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" fill='#fff' y="0px" width="30" height="50" viewBox="0 0 50 50">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Navbar;