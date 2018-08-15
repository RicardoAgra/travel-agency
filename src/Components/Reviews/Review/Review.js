import React from 'react';
import Styles from './Review.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ( props ) => {
    let stars = [];
    for( let i=0 ; i<5 ; i++ ){
        let starType = Styles.greyStar;

        if( i < props.stars ){
            starType = Styles.yellowStar
        }
        stars.push( <FontAwesomeIcon className={ starType } icon={ faStar } /> )
    }

    return(
        <li className={ Styles.review }>
            <h1 className={ Styles.title }>{ props.title }</h1>
            <div className={ Styles.card }>
                <img className={ Styles.picture } src={ require( `../../../Assets/${ props.image }` ) } alt="Picture of the travellers" />
                <div>
                    <div className={ Styles.details }>
                        <span className={ Styles.stars }>{ stars }</span>
                        <span className={ Styles.type }>by Traveller</span>
                        <span className={ Styles.author }>{ props.author }</span>
                    </div>
                    <p className={ Styles.text }>{ props.text }<span className={ Styles.readMore }>Read more</span></p>
                </div>
            </div>

        </li>
    );
}

export default Review;