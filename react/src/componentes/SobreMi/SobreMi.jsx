import React from 'react'
import stylos from './sobreMi.module.css';
import cv from '../../assets/c.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
function SobreMi() {
  return (
    <div className={stylos.container}>
      <div className={stylos.right}>
        <h2>About Me</h2>
        <p>I am <span>Full Stack </span>with a main focus oriented to the Back-end 👨‍💻 . I also have training in Economic Sciences, which allows me to provide logic and problem solving in different environments.
        </p>

        <p>I have agile knowledge of various technologies such as HTML, CSS, GIT/GITHUB, as well as frameworks
          Front-end like REACT/Redux. My main focus is on the Back-End where
          I have experience with technologies such as Node.js, Express.js, JavaScript, Redux, Redux Toolkit, PostgreSQL and
          training me in TypeScript.</p>


        <div>
          <div>
            <h3>Personal Information</h3>
            <ul>
              <li>
                <strong>Phone: </strong>
                3435-330498
              </li>
              <li>
                <strong>Email: </strong>
                kevinjeremiasbarrios@gmail.com
              </li>
              <li>
                <strong>Location: </strong>
                Paraná, Entre Rios, Argentina.
              </li>
              <li>
                <strong>English level: </strong>
                A1 -In training process.
              </li>
            </ul>
          </div>

          <div>
            <button className={stylos.button}>
              <a href={cv} download >Download CV <FontAwesomeIcon icon={faFile} /></a>
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