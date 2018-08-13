import React, { Component } from 'react';
import Styles from './Product.css';

import ProductBox from '../ProductBox/ProductBox';

const destinations = {
    Featured: [{title: "Namibia", image:"namibia.jpg", views: 8, shares: 24, likes: 52 },
        {title: "Cyprus", image:"cyprus.jpg", views: 19 },
        {title: "Brasil", image:"brasil.jpg", views: 3, likes: 15 },
        {title: "Rome", image:"rome.jpg", views: 11, shares: 23, likes: 9 },
        {title: "Japan", image:"japan.jpg", views: 10, shares: 10 }],

    Africa: [{title: "Cabo Verde", image:"cabo_verde.jpg", views: 28, shares: 56, likes: 82 },
        {title: "Namibia", image:"namibia.jpg", views: 8, shares: 24, likes: 52 },
        {title: "Tanzania", image:"tanzania.jpg", views: 2, likes: 3 }],

    Europe: [{title: "Berlin", image:"berlin.jpg", views: 14, shares: 8, likes: 21 },
        {title: "Cyprus", image:"cyprus.jpg", views: 19 },
        {title: "Prague", image:"prague.jpg", views: 7, likes: 8 },
        {title: "Rome", image:"rome.jpg", views: 11, shares: 23, likes: 9 }],

    Americas: [{title: "Argentina", image:"argentina.jpg", views: 10, shares: 10, likes: 10 },
        {title: "Brasil", image:"brasil.jpg", views: 3, likes: 15 },
        {title: "Chile", image:"chile.jpg", views: 10, likes: 10 },
        {title: "Mexico", image:"mexico.jpg", views: 10, shares: 10, likes: 10 }],

    "Asia and Oceania": [{title: "Cambodja", image:"cambodja.jpg", views: 21, shares: 33, likes: 48 },
        {title: "Japan", image:"japan.jpg", views: 10, shares: 10 },
        {title: "New Zealand", image:"new_zealand.jpg", views: 10, likes: 10 },
        {title: "South Korea", image:"south_korea.jpg", views: 10, shares: 10, likes: 10 }]
}

class Province extends Component {
    state = {
        boxes: destinations[ this.props.title ],
        isListView: false
    };

    listViewHandler = () => {
        let newlistView = !this.state.isListView;
        this.setState({ isListView: newlistView });
    }

    componentWillReceiveProps = ( nextProps ) => {
        console.log( nextProps );

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
            console.log( "Re-rendering boxes" );
            console.log( this.state.boxes );

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