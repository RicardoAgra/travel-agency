import React, { Component } from 'react';
import Styles from './Product.css';

import ProductBox from '../ProductBox/ProductBox';

class Province extends Component {
    state = {
        boxes: [{title: "Monte Gordo", image:"monte_gordo.jpg", views: 10, shares: 10, likes: 10 },
                {title: "Albufeira", image:"albufeira.jpg", views: 10 },
                {title: "Sagres", image:"sagres.jpg", views: 10, likes: 10 },
                {title: "Odeceixe", image:"odeceixe.jpg", views: 10, shares: 10, likes: 10 },
                {title: "Porto Corvo", image:"porto_corvo.jpg", views: 10, shares: 10 }],
        isListView: false
    };

    listViewHandler = () => {
        let newlistView = !this.state.isListView;
        this.setState({ isListView: newlistView });
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
                        title={ productBox.title } 
                        image={ productBox.image }
                        views={ productBox.views }
                        shares={ productBox.shares }
                        likes={ productBox.likes } />
                </li>
            ));
            for( let i=0 ; i<5 ; i++ ){
                boxes.push( <li className={ Styles.emptyWrap }></li> );
            }
        };
        
        return(
            <section className={ Styles.product }>

                <div className={ Styles.heading }>
                    <button className={ Styles.listViewBtn } onClick={ this.listViewHandler }>
                        <img src={ require( "../../Assets/list-view.svg" ) }/>
                    </button>
                    <div className={ Styles.line }></div>
                    <h1 className={ Styles.title }>{ this.props.title }</h1>
                </div>
                
                <ul className={ boxClasses.join( " " ) }>
                    { boxes }
                </ul>
            
            </section>
        );
    };
};

export default Province;