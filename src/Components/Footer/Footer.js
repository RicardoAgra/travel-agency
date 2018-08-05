import React from 'react';
import Styles from './Footer.css';

const footer = ( props ) => {
    return(
        <footer className={ Styles.footer }>

            <div className={ Styles.contacts }>
                <h4>CONTACT US</h4>
                <p>cm@travel-agency.com</p>
            </div>

            <div className={ Styles.social }>
                <h4>FOLLOW US</h4>
                <ul>
                    <li>
                        <span className="fa fa-facebook"></span>
                        <a href="/" target="_blank">Facebook</a>
                    </li>
                    <li>
                        <span className="fa fa-twitter"></span>
                        <a href="/" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <span className="fa fa-pinterest"></span>
                        <a href="/" target="_blank">Pinterest</a>
                    </li>
                </ul>
            </div>

            <div className={ Styles.logo }>
                <img scr="" alt="logo" />
            </div>

        </footer>
    );
}

export default footer;