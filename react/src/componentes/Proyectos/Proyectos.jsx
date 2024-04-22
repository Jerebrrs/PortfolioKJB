
import React from 'react'
import stylos from '../Proyectos/proyectos.module.css'
import piPoke from '../Imagenes/image.png'
import portofolio from '../Imagenes/portfolioactual.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faDeploydog, faGithub, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Proyectos() {
    return (
        <div className={stylos.container}>
            <div className={stylos.right} >
                <div>
                    <h2>Projects</h2>
                    <div className={stylos.galeria}>
                        <div>
                            <div className={stylos.card}>
                                <div className={stylos.cardinner}>
                                    <div className={stylos.cardFront}>
                                        <img src={piPoke} alt='piPoke' />
                                        <p>Proyecto Academico Pokemon</p>
                                    </div>
                                    <div className={stylos.cardBack}>
                                        <p>The project revolves around the world of Pokémon.
                                            In it, you will find detailed information about different Pokémon, including their characteristics and abilities.
                                            Best of all, you can also create your own Pokémon!
                                        </p>
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
                            <div className={stylos.card}>
                                <div className={stylos.cardinner}>
                                    <div className={stylos.cardFront}>
                                        <img src={portofolio} alt='portofolio' />
                                        <p>Portfolio</p>
                                    </div>
                                    <div className={stylos.cardBack}>
                                        <p>My personal portfolio where you find a window of who I am as a professional and works carried out.
                                            You will find an About Me, Skills, Projects and Contacts section
                                        </p>
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
                                <a href='https://portfoliokjb.vercel.app/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faDeploydog} />
                                </a>
                                <p>Repositorio:</p>
                                <a href='https://github.com/Jerebrrs/PortfolioKJB' target="_blank" rel="noopener noreferrer">
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