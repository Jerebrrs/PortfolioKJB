import React from 'react'
import stylos from './Menu.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
        <header className={stylos.header}>
            <div className={stylos.logo}>
                <a>KJB</a>
            </div>

            <nav className={stylos.responsive}>
                <ul className={stylos.nav}>
                    
                    <Link className={stylos.Link} to='/'>Inicio</Link>
                    <Link className={stylos.Link} to='/sobremi'>Sobre Mi </Link>
                    <Link className={stylos.Link} to='/proyectos'>Proyectos</Link>
                    <Link className={stylos.Link} to='/skills'>Skills</Link>
                    <Link className={stylos.Link} to='/contacto'>Contacto</Link>
                </ul>
            </nav>
            <div className={stylos.navresponsive}>
                <FontAwesomeIcon  icon={faBars} />
            </div>
        </header>
    )
}
export default Navbar;