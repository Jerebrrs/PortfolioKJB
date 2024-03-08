
import React from 'react'
import stylos from '../Proyectos/proyectos.module.css'
import piPoke from '../Imagenes/image.png'
import portofolio from '../Imagenes/portfolio.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faDeploydog, faGithub, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Proyectos() {
    return (
        <div className={stylos.container}>
            <div className={stylos.right} >
                <div>
                    <h2>Portfolio</h2>
                    <div className={stylos.galeria}>
                        <div>
                            <div className={stylos.proyecto}>
                                <div>
                                    <img src={piPoke} alt='piPoke' />
                                    <div className={stylos.overlay}>
                                        <h3>Pokemons</h3>
                                        <p>Proyecto Academico</p>
                                    </div>
                                </div>
                            </div>
                            <a className={stylos.skillsContainer}>
                                <span>Skills:</span>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faJs} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faReact} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faCss3} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faNode} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faDatabase} />
                                </div>
                            </a>
                            <div className={stylos.skillsContainer}>
                                <p>Deploy:</p>
                                <a href='https://pi-pokemons-9uc7.vercel.app/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faDeploydog} />
                                </a>
                                <p>Repositorio:</p>
                                <a href='https://github.com/Jerebrrs/Pi-Pokemons' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faGithub} />
                                </a>

                            </div>
                        </div>
                        <div>

                            <div className={stylos.proyecto}>
                                <div>
                                    <img src={portofolio} alt='portofolio' />
                                    <div className={stylos.overlay}>
                                        <h3>Portfolio</h3>
                                        <p>CV, Contacto,Sobre MI, Skills</p>
                                    </div>
                                </div>
                            </div>
                            <a className={stylos.skillsContainer}>
                                <span>Skills:</span>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faCode} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faJs} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faReact} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </div>
                                <div className={stylos.skills}>
                                    <FontAwesomeIcon icon={faCss3} />
                                </div>
                            </a>
                            <div className={stylos.skillsContainer}>
                                <p>Deploy:</p>
                                <a href='https://pi-pokemons-9uc7.vercel.app/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faDeploydog} />
                                </a>
                                <p>Repositorio:</p>
                                <a href='https://github.com/Jerebrrs/Portfilio' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faGithub} />
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos;