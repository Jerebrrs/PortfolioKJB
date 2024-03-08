import React from 'react'
import stylos from './Skills.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <div className={stylos.container}>
            <div className={stylos.right}>
                <h2>Skills</h2>
                <div>
                    <h3>Technicaal Skills</h3>
                    <div className={stylos.skillsContainer}>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faCode} />
                            <span>Code</span>
                        </div>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faJs} />
                            <span>JavaScript</span>
                        </div>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faReact} />
                            <span>React</span>
                        </div>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faHtml5} />
                            <span>HTML</span>
                        </div>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faCss3} />
                            <span>CSS</span>
                        </div>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faNode} />
                            <span>Node</span>
                        </div>
                        <div className={stylos.skill}>
                            <FontAwesomeIcon icon={faDatabase} />
                            <span>SQL</span>
                        </div>
                    </div>



                </div>
                <div className={stylos.fila}>

                    <div className={stylos.columna}>
                        <h3>Profedional Skills</h3>
                        <div className={stylos.skills}>
                            <span>Comunicacion</span>
                            <div className={stylos.barraskill}>
                                <div className={`${stylos.progreso} ${stylos.comunicacion}`}>
                                    <span>95%</span>
                                </div>
                            </div>
                        </div>
                        <div className={stylos.skills}>
                            <span>Trabajo en Equipo</span>
                            <div className={stylos.barraskill}>
                                <div className={`${stylos.progreso} ${stylos.trabajo}`}>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>
                        <div className={stylos.skills}>
                            <span>Dedicación</span>
                            <div className={stylos.barraskill}>
                                <div className={`${stylos.progreso} ${stylos.creatividad}`}>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>
                        <div className={stylos.skills}>
                            <span>Perseverancia</span>
                            <div className={stylos.barraskill}>
                                <div className={`${stylos.progreso} ${stylos.dedicacion}`}>
                                    <span>99%</span>
                                </div>
                            </div>
                        </div>
                        <div className={stylos.skills}>
                            <span>Creatividad</span>
                            <div className={stylos.barraskill}>
                                <div className={`${stylos.progreso} ${stylos.proyectos}`}>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills