import React, { Component } from 'react';
import Styles from './Product.css';

import ProductBox from './ProductBox/ProductBox';
import Reviews from '../Reviews/Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

const destinations = {
    Featured: [{title: "Namibia", image:"namibia.jpg",text:"Lorem ipsum dolor sit amet.", views: 8, shares: 24, likes: 52 },
        {title: "Cyprus", image:"cyprus.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 19 },
        {title: "Brasil", image:"brasil.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 3, likes: 15 },
        {title: "Rome", image:"rome.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 11, shares: 23, likes: 9 },
        {title: "Japan", image:"japan.jpg", text:"Lorem ipsum dolor sit amet.", views: 10, shares: 10 }],

    Africa: [{title: "Cabo Verde", image:"cabo_verde.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 28, shares: 56, likes: 82 },
        {title: "Namibia", image:"namibia.jpg", text:"Lorem ipsum dolor sit amet.", views: 8, shares: 24, likes: 52 },
        {title: "Tanzania", image:"tanzania.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 2, likes: 3 },
        {title: "Cabo Verde", image:"cabo_verde.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 28, shares: 56, likes: 82 },
        {title: "Namibia", image:"namibia.jpg", text:"Lorem ipsum dolor sit amet.", views: 8,  shares: 24, likes: 52 },
        {title: "Tanzania", image:"tanzania.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 2, likes: 3 },
        {title: "Cabo Verde", image:"cabo_verde.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 28, shares: 56, likes: 82 },
        {title: "Namibia", image:"namibia.jpg", views: 8, text:"Lorem ipsum dolor sit amet.", shares: 24, likes: 52 },
        {title: "Tanzania", image:"tanzania.jpg", views: 2, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", likes: 3 }],

    Europe: [{title: "Berlin", image:"berlin.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 14, shares: 8, likes: 21 },
        {title: "Cyprus", image:"cyprus.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 19 },
        {title: "Prague", image:"prague.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 7, likes: 8 },
        {title: "Rome", image:"rome.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 11, shares: 23, likes: 9 }],

    Americas: [{title: "Argentina", image:"argentina.jpg", text:"Lorem ipsum.", views: 10, shares: 10, likes: 10 },
        {title: "Brasil", image:"brasil.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 10, likes: 10 },
        {title: "Mexico", image:"mexico.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 10, shares: 10, likes: 10 },
        {title: "Argentina", image:"argentina.jpg", text:"Lorem ipsum.", views: 10, shares: 10, likes: 10 },
        {title: "Brasil", image:"brasil.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 3, likes: 15 },
        {title: "Chile", image:"chile.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 10, likes: 10 },
        {title: "Mexico", image:"mexico.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 10, shares: 10, likes: 10 },
        {title: "Argentina", image:"argentina.jpg", text:"Lorem ipsum.", views: 10, shares: 10, likes: 10 },
        {title: "Brasil", image:"brasil.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 3, likes: 15 }],

    "Asia and Oceania": [{title: "Cambodja", image:"cambodja.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 21, shares: 33, likes: 48 },
        {title: "Japan", image:"japan.jpg", text:"Lorem ipsum dolor sit amet.", views: 10, shares: 10 },
        {title: "New Zealand", image:"new_zealand.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", views: 10, likes: 10 },
        {title: "South Korea", image:"south_korea.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 10, shares: 10, likes: 10 },
        {title: "Cambodja", image:"cambodja.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", views: 21, shares: 33, likes: 48 },
        {title: "Japan", image:"japan.jpg", text:"Lorem ipsum dolor sit amet.", views: 10, shares: 10 },
        {title: "New Zealand", image:"new_zealand.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", views: 10, likes: 10 },
        {title: "South Korea", image:"south_korea.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", views: 10, shares: 10, likes: 10 }]
}

class Product extends Component {
    state = {
        boxes: destinations[ this.props.title ],
        isListView: false,
        isGridView: false
    };

    listViewHandler = () => {
        let isGridView = this.state.isListView;
        let isListView = !isGridView;
        
        this.setState({ 
            isListView: isListView,
            isGridView: isGridView
        });
    }

    componentWillReceiveProps = ( nextProps ) => {
        if( nextProps.title !== this.props.title ){
            this.setState({
                boxes: destinations[ nextProps.title ]
            })
        }
    }

    render() {
        let boxClasses = [ Styles.productBoxes ];
        if( this.state.isListView ){
            boxClasses.push( Styles.listView );
        }

        let boxes = [];
        if( this.state.boxes.length ){
            boxes = this.state.boxes.map( productBox => (
                <li className={ Styles.productBox }>
                    <ProductBox
                        isListView={ this.state.isListView }
                        isGridView={ this.state.isGridView }
                        title={ productBox.title } 
                        image={ productBox.image }
                        text={ productBox.text }
                        views={ productBox.views }
                        shares={ productBox.shares }
                        likes={ productBox.likes } />
                </li>
            ));
            for( let i=0 ; i<5 ; i++ ){
                boxes.push( <li className={ Styles.emptyWrap }></li> );
            }
        };

        let reviews = null;
        if( this.props.title === "Featured" ){
            reviews = <Reviews />
        }
        
        return(
            <section className={ Styles.product }>

                <div className={ Styles.heading }>
                    <button className={ Styles.listViewBtn } onClick={ this.listViewHandler }>
                        <FontAwesomeIcon icon={ faThLarge } />
                    </button>
                    <div className={ Styles.line }></div>
                    <h1 className={ Styles.title }>{ this.props.title }</h1>
                </div>
                
                <ul className={ boxClasses.join( " " ) }>
                    { boxes }
                </ul>

                { reviews }
            
            </section>
        );
    };
};

export default Product;