import React from 'react';
import Styles from './ActionBox.css';

const actionBox = ( props ) => {
    let boxClasses = [ props.actionBox ];
    if( props.isListView ){
        boxClasses.push( Styles.isListView )
    }

    let views = null,
        shares = null,
        likes = null;

    if( props.views ){
        views = (
            <li>
                <span className="fa fa-user"></span>
                <p>{ props.views }</p>
            </li>
        );
    }

    if( props.shares ){
        shares = (
            <li>
                <span className="fa fa-users"></span>
                <p>{ props.shares }</p>
            </li>
        );
    }

    if( props.likes ){
        likes = (
            <li>
                <span className="fa fa-user-plus"></span>
                <p>{ props.likes }</p>
            </li>
        );
    }

    return(
        <div className={ boxClasses.join( " " ) }>
            <ul className={ Styles.stats }>
                { views }
                { shares }
                { likes }
            </ul>
        </div>
    );
}

export default actionBox;