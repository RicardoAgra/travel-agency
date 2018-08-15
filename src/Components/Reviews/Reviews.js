import React from 'react';
import Styles from './Reviews.css';

const reviews = [];

const Reviews = () => {
    return(
        <div className="reviews">
            <div className={ Styles.heading }>
                <div className={ Styles.line }></div>
                <h1 className={ Styles.title }>Reviews</h1>
            </div>

            
        </div>
    );
}

export default Reviews;