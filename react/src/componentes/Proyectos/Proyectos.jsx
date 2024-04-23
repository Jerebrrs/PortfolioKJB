
import React from 'react'
import stylos from '../Proyectos/proyectos.module.css'
import piPoke from '../Imagenes/image.png'
import portofolio from '../Imagenes/portfolioactual.png'
import wear from '../Imagenes/wearfashion.png'

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
                        <div className={stylos.proyectskill}>
                            <div className={stylos.cardcontainer}>
                                <div className={stylos.card}>
                                    <div className={stylos.frontcontent}>
                                        <img src={piPoke} alt='piPoke' />
                                    </div>
                                    <div className={stylos.contentpika}>
                                        <p className={stylos.heading}>Pi Pokemon</p>
                                        <p>The project revolves around the world of Pokémon.
                                            In it, you will find detailed information about different Pokémon, including their characteristics and abilities.
                                            Best of all, you can also create your own Pokémon!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={stylos.skillsContainer}>
                                <span>Skills:</span>
                                <FontAwesomeIcon className={stylos.skills} icon={faCode} />
                                <FontAwesomeIcon className={stylos.skills} icon={faJs} />
                                <FontAwesomeIcon className={stylos.skills} icon={faReact} />
                                <FontAwesomeIcon className={stylos.skills} icon={faHtml5} />
                                <FontAwesomeIcon className={stylos.skills} icon={faCss3} />
                                <img className={stylos.skills} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                                <FontAwesomeIcon className={stylos.skills} icon={faDatabase} />
                            </div>
                            <div className={stylos.skilldeploy}>
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
                        <div className={stylos.proyectskill}>
                            <div className={stylos.cardcontainer}>
                                <div className={stylos.card}>
                                    <div className={stylos.frontcontent}>
                                    <img src={portofolio} alt='portofolio' />

                                    </div>
                                    <div className={stylos.contentport}>
                                        <p className={stylos.heading}>My Portfolio</p>
                                        <p>My personal portfolio where you find a window of who I am as a professional and works carried out.
                                            You will find an About Me, Skills, Projects and Contacts section
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={stylos.skillsContainer}>
                                <span>Skills:</span>
                                <FontAwesomeIcon className={stylos.skills} icon={faCode} />
                                <FontAwesomeIcon className={stylos.skills} icon={faJs} />
                                <FontAwesomeIcon className={stylos.skills} icon={faReact} />
                                <FontAwesomeIcon className={stylos.skills} icon={faHtml5} />
                                <FontAwesomeIcon className={stylos.skills} icon={faCss3} />
                                <img className={stylos.skills} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                                <FontAwesomeIcon className={stylos.skills} icon={faDatabase} />
                            </div>
                            <div className={stylos.skilldeploy}>
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
                        <div className={stylos.proyectskill}>
                            <div className={stylos.cardcontainer}>
                                <div className={stylos.card}>
                                    <div className={stylos.frontcontent}>
                                        <img src={wear} alt='wear' />

                                    </div>
                                    <div className={stylos.content}>
                                        <p className={stylos.heading}>Wearfashion</p>
                                        <p>Wearfashion is an innovative E-commerce based on urban fashion.
                                            Where it has an attractive landing, a product home with a filter panel.
                                            Each product has a detail where you can choose size and quantity and add it to the cart.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={stylos.skillsContainer}>
                                <span>Skills:</span>
                                <FontAwesomeIcon className={stylos.skills} icon={faCode} />
                                <FontAwesomeIcon className={stylos.skills} icon={faJs} />
                                <FontAwesomeIcon className={stylos.skills} icon={faReact} />
                                <FontAwesomeIcon className={stylos.skills} icon={faHtml5} />
                                <FontAwesomeIcon className={stylos.skills} icon={faCss3} />
                                <img className={stylos.skills} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                                <FontAwesomeIcon className={stylos.skills} icon={faDatabase} />
                            </div>
                            <div className={stylos.skilldeploy}>
                                <p>Deploy:</p>
                                <a href='https://wearfashion.vercel.app/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faDeploydog} />
                                </a>
                                <p>Repositorio:</p>
                                <a href='https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className={stylos.skills} icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Proyectos;