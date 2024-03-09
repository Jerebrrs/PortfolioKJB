// import React from 'react'
// import stylos from './Menu.module.css'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAnglesUp, faBars } from '@fortawesome/free-solid-svg-icons';


// function Navbar() {
//     return (
//         <header className={stylos.header}>
//             <div className={stylos.logo}>
//                 <a>KJB</a>
//             </div>

//             <nav className={stylos.responsive}>
//                 <ul className={stylos.nav}>

//                     <Link className={stylos.Link} to='/'>Inicio</Link>
//                     <Link className={stylos.Link} to='/sobremi'>Sobre Mi </Link>
//                     <Link className={stylos.Link} to='/proyectos'>Proyectos</Link>
//                     <Link className={stylos.Link} to='/skills'>Skills</Link>
//                     <Link className={stylos.Link} to='/contacto'>Contacto</Link>
//                 </ul>
//             </nav>
//             <div className={stylos.navresponsive}>
//                 <FontAwesomeIcon  icon={faBars} />
//             </div>
//         </header>
//     )
// }
// export default Navbar;
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