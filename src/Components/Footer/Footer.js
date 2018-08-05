import React from 'react';
import Styles from './Footer.css';

const footer = ( props ) => {
    return(
        <footer className={ Styles.footer }>

            <ul className={ Styles.contacts }>
                <li>
                    <span className="fa fa-map-marker "></span>
                    <div>
                        <p>6170 Peshwar Place</p>
                        <p> Washington, DC 20521-6170</p>
                    </div>
                </li>
                <li>
                    <span className="fa fa-phone"></span>
                    <p>555-1234567</p>
                </li>
                <li>
                    <span className="fa fa-envelope-o"></span>
                    <p>cm@travel-agency.com</p>
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