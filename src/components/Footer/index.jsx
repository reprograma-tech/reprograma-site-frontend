import styles from './styles.module.scss';
import { FaInstagram,FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaEnvelope} from "react-icons/fa";

export function Footer(){
  return (
    <footer className={styles.footerContainer}>
    <div>
      <h3>The future is female <span className={styles.underline}>coders.</span></h3>
    </div>
    <div className={styles.social}>
        <div className={styles.icons}>
          <a href="https://instagram.com/reprogramaBR" target="_blank">
            <FaInstagram className={styles.icon} aria-hidden="true"/>
          </a>
          <a href="https://facebook.com/ReprogramaBr" target="_blank">
            <FaFacebookSquare className={styles.icon} aria-hidden="true"/>
          </a>
          <a href="https://twitter.com/ReprogramaBr" target="_blank">
            <FaTwitterSquare className={styles.icon} aria-hidden="true"/>
          </a>
          <a href="https://www.linkedin.com/company/reprogramabr" target="_blank">
            <FaLinkedin className={styles.icon} aria-hidden="true"/>
          </a>
          <a href="mailto:info@reprograma.com.br?Subject=Olá!" target="_top">
            <FaEnvelope className={styles.icon} aria-hidden="true"/>
          </a>
        </div>
            <p>Avenida Paulista, 1374 </p>
            <p>São Paulo - SP, Brasil</p>
            <img alt="logo da reprograma" src="/images/logo-reprograma-fundoclaro.png"/>
    </div>
  </footer>
)
}


