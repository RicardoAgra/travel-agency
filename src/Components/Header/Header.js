import React from 'react';
import Styles from './Header.css'

const header = ( props ) => {
    return(
        <header className={ Styles.header }>
            <img className={ Styles.logo } src="./" alt="logo" />
        </header>
    );
}

export default header;