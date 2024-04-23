import React from 'react'
import './legado.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
function Legado() {
    return (
        <section className='legado section'>

            <h2 className='section__title'>History</h2>
            <span className='section__subtitle'>My Personal Journey</span>
            <div className="legado__container container">
                <div className="legado__tabs">
                    <div className="legado__button legado__active
                     button--flex">
                        <FontAwesomeIcon className='icon' icon={faUserGraduate} /> Education
                    </div>

                    <div className="legado__button button--flex">
                       Experiencia <FontAwesomeIcon className='icon' icon={faBriefcase} /> 
                    </div>
                </div>
                <div className="legado__section">
                    <div className="legado__content legado__content-active">
                        <div className="legado__data">
                            <div>
                                <h3 className="legado__title">Full Stack Web Developer</h3>
                                <span className="legado__subtitle">Soy Henry</span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sept.2023-Abr.2024
                                </div>
                            </div>

                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                        </div>

                        <div className="legado__data">
                            <div>

                            </div>
                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                            <div>
                                <h3 className="legado__title">E-Comerce Wearfashion</h3>
                                <span className="legado__subtitle">Academic Project-Soy Henry</span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>


                        </div>
                        <div className="legado__data">
                            <div>
                                <h3 className="legado__title">Back-End Java</h3>
                                <span className="legado__subtitle">Argentina Programa 4.0</span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022-2023
                                </div>
                            </div>

                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                        </div>

                        <div className="legado__data">
                            <div>

                            </div>
                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                            <div>
                                <h3 className="legado__title">Pi Pokemon</h3>
                                <span className="legado__subtitle">Academic Project-Soy Henry</span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> DIC-2023
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="legado__content">
                        <div className="legado__data">
                            <div>
                                <h3 className="legado__title">Certified Public Accountant</h3>
                                <span className="legado__subtitle">Faculty of economic sciences E.R</span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016-2020
                                </div>
                            </div>

                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                        </div>

                        <div className="legado__data">
                            <div>

                            </div>
                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                            <div>
                                <h3 className="legado__title">Selplast S.A</h3>
                                <span className="legado__subtitle">Administrative Cashier</span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018-2023
                                </div>
                            </div>


                        </div>
                        <div className="legado__data">
                            <div>
                                <h3 className="legado__title">Baccalaureate Economics and Administration</h3>
                                <span className="legado__subtitle">Institute: Domingo Faustino Sarmiento </span>
                                <div className="legado__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2009-2015
                                </div>
                            </div>

                            <div>
                                <span className="legado__rounder"></span>
                                <span className="legado__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Legado;