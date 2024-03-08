import React from 'react'
import stylos from './sobreMi.module.css';
import cv from '../../assets/c.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFile } from '@fortawesome/free-solid-svg-icons';
function SobreMi() {
  return (
    <div className={stylos.container}>
      <div className={stylos.right}>
        <h2>Sobre Mi</h2>
        <p><span>Hola nuevamente, soy Kevin Jeremias Barrios </span> Full Stack Web Developer con formación en carreras de Ciencias Económicas. Mi trayectoria incluye
          cursos de web Full Stack que han ampliado mis habilidades y competencias en la implementación de lógica y
          resolución de problemas en entornos colaborativos.</p>

        <p>Poseo conocimientos agiles de diversas tecnológias como HTML, CSS, GIT/GITHUB, así como frameworks
          Front-end como REACT, y capacitándome en Bootstrap. Mi enfoque principal se centra en el Back-End donde
          tengo experiencia con tecnologías como Node.js, Express.js, JavaScript, Redux, Redux Toolkit, PostgreSQL y
          capacitándome en TypeScript.</p>

        <p> Mi objetivo es contribuir de manera significativa en equipos de desarrollo, colaborando en la creación de
          soluciones robustas y eficientes que impulsen el éxito de los proyectos.</p>
        <div>
          <div>
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <strong>Telefono: </strong>
                3435-330498
              </li>
              <li>
                <strong>Email: </strong>
                kevinjeremiasbarrios@gmail.com
              </li>
              <li>
                <strong>Website: </strong>
                www.EjemploMiWEB.com.ar
              </li>
              <li>
                <strong>Direccion: </strong>
                Paraná, Entre Rios, Argentina.
              </li>
              <li>
                <strong>Cargo: </strong>
                <span>Freelancer</span>
              </li>
            </ul>
          </div>

          <div>
            <button className={stylos.button}>
              <a href={cv} download >Descargar CV <FontAwesomeIcon icon={faFile} /></a>
                <span></span>
            </button>

          </div>
        </div>
      </div>
      <div></div>
    </div>
   
  )
}

export default SobreMi;