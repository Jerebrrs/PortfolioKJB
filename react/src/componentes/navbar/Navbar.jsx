
import React, { useState } from 'react';
import stylos from './Menu.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <header className={stylos.header}>
            <div className={stylos.logo}>
                <a >KJB</a>
            </div>

            <nav className={`${stylos.nav} ${showNav ? stylos.showNav : ''}`}>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/sobremi'>Sobre Mí</Link></li>
                    <li><Link to='/proyectos'>Proyectos</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </nav>

            <div className={stylos.responsive} onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
}

export default Navbar;