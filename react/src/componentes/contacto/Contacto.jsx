import React, { useRef } from 'react'
import stylos from './Contacto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ubicacion from '../Imagenes/ubicacion.png'

import emailjs from '@emailjs/browser';
function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8ouqvjs', 'template_elp4i0i', form.current, {
                publicKey: '8E8On3410sP04sGPO',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className={stylos.container}>
            <div className={stylos.right}>
                <h2>Contacto</h2>
                <div className={stylos.fila}>
                    {/* Formulario */}
                    <div className={stylos.col}>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>


                    <div className={stylos.col}>
                        <img src={ubicacion} alt='ubicacion' />
                        <div className={stylos.info}>
                            <ul>
                                <li>
                                    <FontAwesomeIcon className={stylos.icon} icon={faLocationDot} />
                                    Ubicación: Paraná, Entre Rios, Argentina.
                                </li>
                                <li>
                                    <FontAwesomeIcon className={stylos.icon} icon={faMobileScreen} />
                                    Telefono: 3435 330498
                                </li>
                                <li>
                                    <FontAwesomeIcon className={stylos.icon} icon={faEnvelope} />
                                    Email: kevinjeremiasbarrios@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contacto;
