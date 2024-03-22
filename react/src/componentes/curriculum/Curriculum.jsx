import React from 'react'
import stylos from './Curriculum.module.css'

function Curriculum() {
    return (
        <div className={stylos.container}>
            <div className={stylos.right}>
                <h2>Curriculum</h2>
                <div className={`${stylos.fila} `}>
                    <div className={stylos.colIzaquierda}>
                        <h3>Educacion</h3>
                        <div className={`${stylos.items} ${stylos.saraza}`}>
                            <h4>Full Stack Developer</h4>
                            <span className={stylos.casa}>Bootcamp Soy Henry</span>
                            <span className={stylos.fecha}>Oct 2023- Actualidad. </span>
                            <p>Bootcamps de mas de 800hs, en el cual adqueri habilidades tecnicas y blandas. </p>
                            <p>
                                Habilidades Técnicas: JavaScript, HTML, CSS, React, Redux, Sequelize, Express, SQL.
                            </p>
                            <p>  Habilidades Blandas: Comunicación, Interpretación, Trabajo en equipo, Dedicación, Confianza.</p>
                            <p>
                                Estos programas intensivos no solo me han proporcionado un sólido conocimiento técnico, sino también han fortalecido mis habilidades interpersonales y mi capacidad para colaborar en equipos multidisciplinarios.
                            </p>
                            <div className={stylos.conectori}>
                                <div className={stylos.circuloi}></div>
                            </div>
                        </div>
                        <div className={`${stylos.items} ${stylos.saraza}`}>
                            <h4>Contador Publico</h4>
                            <span className={stylos.casa}>Universidad Nacional De Entre Rios</span>
                            <span className={stylos.fecha}>2016-En pausa. </span>
                            <p>Carrera de Grado donde complete hasta el tercer año en su totalidad, en la cual adqueri conocimientos Contables, Macroeconomicos, Logica Matematica, Derecho privado y publico, Metodologias agiles.</p>
                            <div className={stylos.conectori}>
                                <div className={stylos.circuloi}></div>
                            </div>
                        </div>
                        {/* <div className={`${stylos.items} ${stylos.saraza}`}>
                            <h4>Bachiller en Economía y Administración</h4>
                            <span className={stylos.casa}>Colegio Domingo Faustino Sarmiento</span>
                            <span className={stylos.fecha}>2009-2015</span>
                            <p>Completé mis estudios secundarios en un colegio con orientación en Economía y Administración.

                                Durante este período, adquirí una sólida formación en áreas clave relacionadas con la economía y la administración, lo que sentó las bases para mi educación superior y mi desarrollo profesional futuro.</p>
                            <div className={stylos.conectori}>
                                <div className={stylos.circuloi}></div>
                            </div>
                        </div> */}
                    </div>
                    <div className={stylos.colDerecha}>
                        <h3>Experiencia de Trabajo</h3>
                        {/* <div className={`${stylos.items} ${stylos.derecha}`}>
                            <h4>Frelancer</h4>
                            <span className={stylos.casa}>Emprendedor</span>
                            <span className={stylos.fecha}>2023-Actualidad </span>
                            <p>Frelancer y emprendedror</p>
                            <div className={stylos.conectord}>
                                <div className={stylos.circulod}></div>
                            </div>
                        </div> */}
                        <div className={`${stylos.items} ${stylos.derecha}`}>
                            <h4>Cajero Administrativo</h4>
                            <span className={stylos.casa}>Selplast SA</span>
                            <span className={stylos.fecha}>Feb.2019-Oct.2023 </span>
                            <p>Trabajo en relacion de dependencia, donde me desarrolle y forme por mas de 5 años donde cumplia funciones como:
                                Facturacion, Manejo de Dinero y Cheques, Cartera de clientes, Cobranza, Atencion al Publico.
                            </p>
                            <div className={stylos.conectord}>
                                <div className={stylos.circulod}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum;