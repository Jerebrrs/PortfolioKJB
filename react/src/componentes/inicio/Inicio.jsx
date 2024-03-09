import React, { useEffect, useState } from 'react'
import stylos from '../inicio/Inicio.module.css'
import SobreMi from '../SobreMi/SobreMi';
import Proyectos from '../Proyectos/Proyectos';
import fotoYo from '../Imagenes/Yo.png'

import Skills from '../skills/Skills';
import Curriculum from '../curriculum/Curriculum';
import Contacto from '../contacto/Contacto';
import Footer from '../footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Inicio = () => {

    const [nombre, setNombre] = useState('');

    useEffect(() => {
        const nombreCompleto = 'Hola, soy Kevin Jeremias';
        let currentLength = 0;

        const interval = setInterval(() => {
            if (currentLength <= nombreCompleto.length) {
                setNombre(nombreCompleto.substring(0, currentLength));
                currentLength++;
            } else {
                clearInterval(interval);
            }
        }, 70); // Velocidad de escritura en milisegundos

        return () => clearInterval(interval);
    }, []);

    return (
        <section >
            <div className={stylos.inicioNuevo}>
                <div className={stylos.contenedor}>
                    <div className={stylos.fotoPersonal}>
                        <img src={fotoYo} alt='fotoYo' />
                        <div className={stylos.redes}>
                            <a href='https://www.linkedin.com/in/kevinjbarrios/' target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href='https://github.com/Jerebrrs' target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div  className={stylos.nombreTitulo}>
                        <h1>{nombre} </h1>
                        <h2>Full Stack Web Developer</h2>
                    </div>
                </div>
            </div>
            <SobreMi />
            <Skills />
            <Proyectos />
            <Curriculum />
            {/* <Contacto /> */}
            <Footer />
        </section>
    )
}

export default Inicio;