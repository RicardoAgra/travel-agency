import React from 'react';
import Styles from './ProductBox.css';

import ActionBox from './ActionBox/ActionBox';

const productBox = ( props ) => {
    let pbClasses = [ Styles.productBox ];

    if( props.isListView ){
        pbClasses.push( Styles.listView );
    }
    
    return(
        <div className={ pbClasses.join( " " ) }>
            <div className={ Styles.preview }>
                <div className={ Styles.pane }></div>
                <span className="fa fa-search-plus"></span> 
                <img src={ require( `../../../Assets/${ props.image }` ) } alt="Beach" />
                <div className={ Styles.triangle } />
            </div>
            
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>{ props.title }</h1>
                <p className={ Styles.description }>{ props.text }</p>
                <ActionBox className={ Styles.actionBox } actionBox={ Styles.actionBox } views={ props.views } shares={ props.shares } likes={ props.likes } />
            </div>
            
            <button className={ Styles.orderBtn }>book now</button>

        </div>
    );
}

export default productBox;