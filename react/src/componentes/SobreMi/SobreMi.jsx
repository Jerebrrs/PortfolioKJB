import React from 'react'
import stylos from './sobreMi.module.css';
import cv from '../../assets/c.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
function SobreMi() {
  return (
    <div className={stylos.container}>
      <div className={stylos.right}>
        <h2>Sobre Mi</h2>
        <p>Soy <span>Full Stack Developer</span>con enfoque principal orientado al Back-end 👨‍💻. Cuento con un Background en
          Ciencias Económicas, cual me ha permitido desarrollar soft skills como pensamiento lógico y resolución de
          problemas aplicándolos en diferentes entornos de desarrollo.
        </p>

        <p>Cuento con sólidos conocimientos en diversas tecnologías como Html, Css, Git/Git hub, así como frameworks
          Frontend como React/Redux. Mi enfoque principal se centra en el BackEnd donde tengo experiencia con
          tecnologías como Typescript, Node.js, Express.js, SQL, Docker, MongoDb.
        </p>
        <div>
          <div>
            <h3>Información Personal</h3>
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
                <strong>Ubicación: </strong>
                Paraná, Entre Rios, Argentina.
              </li>
              <li>
                <strong>English level: </strong>
                A1 -In training process.
              </li>
            </ul>
          </div>

          <div>
            <button className={stylos.button}>  <a href={cv} download >Download CV <FontAwesomeIcon icon={faFile} /></a>
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>

  )
}

export default SobreMi;