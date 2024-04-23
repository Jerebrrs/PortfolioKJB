import React, { useRef, useState } from 'react'
import stylos from './Contacto.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ubicacion from '../Imagenes/ubicacion.png'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



import emailjs from '@emailjs/browser';
function Contacto() {
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const form = useRef();
    const [formCompleted, setFormCompleted] = useState(false);

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8ouqvjs', 'template_elp4i0i', form.current, {
                publicKey: '8E8On3410sP04sGPO',
            })
            .then(
                () => {
                    setSnackbarSeverity('success');
                    setSnackbarMessage('Email sent successfully!');
                    setSnackbarOpen(true);
                    form.current.reset();
                    setFormCompleted(false);
                },
                (error) => {
                    setSnackbarSeverity('error');
                    setSnackbarMessage(`Failed to send email: ${error.text}`);
                    setSnackbarOpen(true);
                }
            );
    };
    const handleInputChange = () => {
        const inputs = form.current.querySelectorAll('input, textarea');
        let isCompleted = true;
        inputs.forEach((input) => {
            if (!input.value) {
                isCompleted = false;
            }
        });
        setFormCompleted(isCompleted);
    };

    return (
        <div className={stylos.container}>
            <div className={stylos.right}>
                <h2>Contacto</h2>
                <div className={stylos.fila}>

                    <div className={stylos.col}>
                        <form ref={form} onSubmit={sendEmail} onChange={handleInputChange}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" disabled={!formCompleted} />
                        </form>
                    </div>


                    <div className={stylos.col}>
                        <img src={ubicacion} alt='ubicacion' />
                        <div className={stylos.info}>
                            <ul>
                                <li>
                                    <FontAwesomeIcon className={stylos.icon} icon={faLocationDot} />
                                    Location: Paraná, Entre Rios, Argentina.
                                </li>
                                <li>
                                    <FontAwesomeIcon className={stylos.icon} icon={faMobileScreen} />
                                    Phone: 3435 330498
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
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default Contacto;
