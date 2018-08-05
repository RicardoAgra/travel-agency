import React from 'react';
import Styles from './Header.css'

const header = ( props ) => {
    return(
        <header id="header" className={ Styles.header }>
            <img className={ Styles.logo } src={ require("../../Assets/logo_small.png") } alt="multi-colored petals" />
            <h1 className={ Styles.title }>Travel Agency</h1>
        </header>
    );
}

export default header;