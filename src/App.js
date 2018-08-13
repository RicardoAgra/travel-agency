import React, { Component } from 'react';
import Styles from './App.css';

import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {
    destination: "Featured"
  }
  
  changeDestinationHandler = ( destination ) => {
    console.log( destination );

    let newState = {
        destination: destination
    }

    this.setState( newState );

    console.log( this.state );
  }

  render() {
    return (
      <div className={ Styles.App }>
        
        <Header changeDestination={ this.changeDestinationHandler } />

        <section className={ Styles.intro }>
          <h1>Perfect your dream vacation</h1>
          <h2>Get matched to top travel specialists,</h2>
          <h2>travel to the four corners of the world.</h2>
        </section>

        <Product title={ this.state.destination }/>

        <Footer />
      
      </div>
    );
  }
}

export default App;
