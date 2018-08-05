import React from 'react';
import Styles from './ProductBox.css';

const productBox = ( props ) => {
    return(
        <div className={ Styles.productBox }>
            <div className={ Styles.preview }>
                <img src="" alt="picture" />
                <div className={ Styles.triangle } />
            </div>
            
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>{ props.title }</h1>
                <p>Lorem impsum.</p>
            </div>
            
        </div>
    );
}

export default productBox;