import React from 'react';
import Styles from './Reviews.css';

import Review from './Review/Review';

const reviews = [{
        title: "Luxury Africa Family Safari, Kenya, Maasai Culture",
        stars: 5,
        author: "Jeff M.",
        img: "jeff.jpg",
        text: "This trip was easily the trip of a lifetime for our family of four, and it will be quite some time before we stop talking about it!!  We have done a lot of travel with our children alongside us, but the adventures that were found around every corner on this African safari were beyond our expectations, and far..."
    },{
        title: "Luxury Tour of India, Varanasi, Delhi, Agra, Jaipur",
        stars: 4,
        author: "Stuart M.",
        img: "stuart.jpg",
        text: "Few things command more respect than hard work, integrity, dedication and the ability to follow through. These are among the many attributes we experienced from start to finish when organizing our trip to India with this travel agent. This travel agent is an excellent listener and pays attention to detail; a lost..."
    },{
        title: "Luxury Family Trip to New Zealand, Queenstown, Wellington, Lord of the Rings Sites",
        stars: 4,
        author: "Sharon W.",
        img: "sharon.jpg",
        text: "We're sorry that we can only give this travel agency 5 stars -- we'd have preferred 10 stars or more!  What an awesome trip!  It helps that New Zealand is probably the most beautiful place on the planet, but more importantly, our travel agency arranged our access to the country’s wonders so seamlessly. We’re..."
    }];

const Reviews = () => {
    let reviewsList = [];

    reviews.forEach( ( review ) =>{
        reviewsList.push(
            <Review title={ review.title } stars={ review.stars } author={ review.author } image={ review.img } text={ review.text } />
        )
    });

    return(
        <div className={ Styles.reviews }>
            <div className={ Styles.heading }>
                <div className={ Styles.line }></div>
                <h1 className={ Styles.title }>Reviews</h1>
            </div>
    
            <ul>
                { reviewsList }
            </ul>

        </div>
    );
}

export default Reviews;