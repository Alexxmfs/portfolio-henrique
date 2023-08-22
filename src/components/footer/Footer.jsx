import React from 'react';
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Henrique</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/henrique_sdc/" className="footer__social-link" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/henrique-sdc/" className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/henrique-sdc" className="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; Desenvolvido por Alexxmfs</span>
            </div>
        </footer>
    )
}

export default Footer;