import React, { Component } from 'react';
import Styles from './CityAlbum.css';

class CityAlbum extends Component {
    state = {
        isColumn: false
    }

    render() {
        return(
            <div className={ Styles.cityAlbum }>

            </div>
        );
    }
}

export default CityAlbum;