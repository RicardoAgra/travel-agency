import React from 'react';
import Styles from './Footer.css';

const footer = ( props ) => {
    return(
        <footer className={ Styles.footer }>

            <ul className={ Styles.contacts }>
                <li>
                    <button>
                        <span className="fa fa-building"></span>
                        <div>
                            <p>Avenida da República</p>
                            <p>8000-000 Faro</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <span style={{ transform: 'rotateY( 180deg )' }} className="fa fa-phone"></span>
                        <p>+351 289 133 456</p>
                    </button>
                </li>
                <li>
                    <button>
                        <span className="fa fa-envelope-o"></span>
                        <p>info@travelagency.com</p>
                    </button>
                </li>
            </ul>

            <ul className={ Styles.social }>
                <li>
                    <button><span className="fa fa-facebook"></span></button>
                </li>
                <li>
                    <button><span className="fa fa-twitter"></span></button>
                </li>
                <li>
                    <button><span className="fa fa-pinterest"></span></button>
                </li>
                <li>
                    <button><span className="fa fa-instagram"></span></button>
                </li>
                <li>
                    <button><span className="fa fa-tumblr"></span></button>
                </li>
            </ul>

            <div className={ Styles.logo }>
                <img src={ require("../../Assets/logo_small.png") } alt="multi-colored petals" />
            </div>

        </footer>
    );
}

export default footer;