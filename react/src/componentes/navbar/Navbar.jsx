
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
                <img className={stylos.imgLogo} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhmd3U2NXR5czhvbzRkczR5bTZtYmR5NHpmYmZyeGVmMTI3MjVncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/kAm4u0lhDCmXnugz6p/giphy.gif" />
            </div>
            <div className={`${stylos.responsive} ${showNav ? stylos.hide : ''}`} onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <nav className={`${stylos.nav} ${showNav ? stylos.showNav : ''}`}>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/sobremi'>Sobre MI</Link></li>
                    <li><Link to='/proyectos'>Proyectos</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>

                </ul>
            </nav>
{/* 
            <div className={stylos.responsive} onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div> */}
        </header>
    );
}

export default Navbar;