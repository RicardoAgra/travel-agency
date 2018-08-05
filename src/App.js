import React, { Component } from 'react';
import Styles from './App.css';

import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={ Styles.App }>
        
        <Header />

        <Product title="Featured"/>
        <Product title="Algarve"/>
        <Product title="Alentejo"/>

        <Footer />
      
      </div>
    );
  }
}

export default App;
