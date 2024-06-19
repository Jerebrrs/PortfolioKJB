
import stylos from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import cv from '../../assets/CvKB.pdf'

function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };
    return (
        <footer >
            <a href='/' className={stylos.arriba} onClick={handleScrollToTop}>
                <FontAwesomeIcon className={stylos.icon} icon={faAnglesUp} />
            </a>
            <div className={stylos.redes}>
                <a href='https://www.linkedin.com/in/kevinjbarrios/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={stylos.icon} icon={faLinkedin} /></a>
                <a href='https://github.com/Jerebrrs' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={stylos.icon} icon={faGithub} /></a>
                <a href={cv} download><FontAwesomeIcon className={stylos.icon} icon={faFile} /></a>
            </div>
        </footer>

    )
}

export default Footer;