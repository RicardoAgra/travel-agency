import React, { Component } from 'react';
import Styles from './Product.css';

import ProductBox from '../UI/ProductBox/ProductBox';

class Province extends Component {
    state = {
        boxes: [{title: "Monte Gordo"},{title: "Albufeira"},{title: "Sagres"},{title: "Odeceixe"},{title: "Porto Corvo"}],
        listView: false
    };

    render() {
        let boxes = [];
        if( this.state.boxes.length ){
            boxes = this.state.boxes.map( productBox => (
                <li className={ Styles.productBox }>
                    <ProductBox title={ productBox.title } />
                </li>
            ))
        };
        
        return(
            <section className={ Styles.cityAlbum }>

                <div className={ Styles.heading }>
                    <button className={ Styles.listViewBtn }><img src={ require( "../../Assets/list-view.svg" ) }/></button>
                    <div className={ Styles.line }></div>
                    <h1 className={ Styles.title }>{ this.props.title }</h1>
                </div>
                
                <ul className={ Styles.productBoxes }>
                    { boxes }
                </ul>
            
            </section>
        );
    };
};

export default Province;