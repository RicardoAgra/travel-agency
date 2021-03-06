import React from 'react';
import Styles from './Dropdown.css';

const Dropdown = ( props ) => {
    let links = [];
    props.links.forEach( link => {
        links.push(
            <li className={ Styles[ link.class ] || "" } 
                onClick={ () => { props.changeDestination( link.title ) } } >
                { link.title }
            </li>
        )
    });

    let dropdownClasses = [ Styles.dropdown ];
    if( props.selected ){
        dropdownClasses.push( Styles.visible );
    }

    return(
        <div class={ dropdownClasses.join( " " ) } onClick={ props.click }>
            <h2>{ props.title }<span className="fa fa-caret-down"></span></h2>
            <ul class={ Styles.menu }>  
                { links }
            </ul>
        </div>
    );
}

export default Dropdown;