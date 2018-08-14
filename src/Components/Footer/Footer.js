import React from 'react';
import Styles from './Footer.css';

const footer = ( props ) => {
    return(
        <footer className={ Styles.footer }>

            <ul className={ Styles.contacts }>
                <li>
                    <span className="fa fa-building"></span>
                    <div>
                        <p>Avenida da República</p>
                        <p>8000-000 Faro</p>
                    </div>
                </li>
                <li>
                    <span style={{ transform: 'rotateY( 180deg )' }} className="fa fa-phone"></span>
                    <p>+351 289 133 456</p>
                </li>
                <li>
                    <span className="fa fa-envelope-o"></span>
                    <p>info@travelagency.com</p>
                </li>
            </ul>

            <ul className={ Styles.social }>
                <li>
                    <span className="fa fa-facebook"></span>
                </li>
                <li>
                    <span className="fa fa-twitter"></span>
                </li>
                <li>
                    <span className="fa fa-pinterest"></span>
                </li>
                <li>
                    <span className="fa fa-instagram"></span>
                </li>
                <li>
                    <span className="fa fa-tumblr"></span>
                </li>
            </ul>

            <div className={ Styles.logo }>
                <img src={ require("../../Assets/logo_small.png") } alt="multi-colored petals" />
            </div>

        </footer>
    );
}

export default footer;