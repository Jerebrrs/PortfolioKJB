import React from 'react'
import stylos from './Contacto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ubicacion from '../Imagenes/ubicacion.png'
function Contacto() {
    return (
        <div className={stylos.container}>
            <div className={stylos.right}>
                <h2>Contacto</h2>
                <div className={stylos.fila}>
                    {/* Formulario */}
                    <div className={stylos.col}>
                        <input type='text' placeholder='Tu nombre.. .' />
                        <input type='text' placeholder='Numero Telefonico.. .' />
                        <input type='text' placeholder='Tu E-Mail.. .' />
                        <input type='text' placeholder='Tema.. .' />
                        <textarea name='' id='' cols='30' rows='10' placeholder='Mensaje.. .'></textarea>
                        <button>
                            Enviar Mensaje
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span className={stylos.overlay}></span>
                        </button>
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

export default Contacto