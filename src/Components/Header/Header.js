import React, { Component, Fragment } from 'react';
import Styles from './Header.css';

import Dropdown from './Dropdown/Dropdown'

let destinations = [ "Featured","Africa","Europe","Americas","Asia and Oceania" ];

class Header extends Component {
    state = {
        isMenuVisible: false,
        isDestinationVisible: false,
        isAboutVisible: false,
        isSearchError: false
    }

    componentDidMount() {
        window.onclick = () => {
            this.setState({
                isDestinationVisible: false,
                isAboutVisible: false
            });
        }
    }

    searchHandler = () => {
        let input = document.getElementById( "search-input" ).value;
        let newState = {
            isSearchError: true
        }

        if( /^[a-zA-Z ]+$/.test( input ) ){
            input = input.toLowerCase();
            input = input.charAt( 0 ).toUpperCase() + input.slice( 1 );

            newState.isSearchError = destinations.indexOf( input ) === -1;
        }

        if( newState.isSearchError ){
            this.setState( newState );
            window.setTimeout( ()=>{ this.setState({ isSearchError: false }) },5000 );
        }
        else {
            this.props.changeDestination( input );
        }
    }

    enableMenuHandler = () => {
        let newState = { 
            isMenuVisible: !this.state.isMenuVisible,
            isDestinationVisible: false,
            isAboutVisible: false
        }

        this.setState( newState );
    }

    dropdownHandler = ( event, dropdown ) => {
        event.stopPropagation();

        let newState = {
            isDestinationVisible: false,
            isAboutVisible: false
        };
        
        newState[ dropdown ] = !this.state[ dropdown ];

        this.setState( newState );
    }

    render() {
        let headerClasses = [ Styles.header,"search-box" ];
        if(  window.scrollY > 250 ){
            headerClasses.push( "hasScrolled" );
        }
        if( this.state.isMenuVisible ){
            headerClasses.push( Styles.menuVisible );
            if( this.state.isDestinationVisible || this.state.isAboutVisible ){
                headerClasses.push( Styles.expanded );
            }
        }

        let searchMessageClasses = [ Styles.searchMessage ];
        if( this.state.isSearchError ){
            searchMessageClasses.push( Styles.visible );
        }

        return(
            <Fragment>
                <header id="header" className={ headerClasses.join( " " ) }>
                    <nav className={ Styles.navigation }>
                        <button className={ Styles.burger } onClick={ this.enableMenuHandler }>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>

                        <div className={ Styles.home } onClick={ () =>{ this.props.changeDestination( "Featured" ) } }>
                            <img className={ Styles.logo } src={ require("../../Assets/logo_small.png") } alt="multi-colored petals" />
                            <h1 className={ Styles.title }>Travel Agency</h1>
                        </div>

                        <Dropdown selected={ this.state.isDestinationVisible } className={ Styles.dropdown } title="Destinations"
                            click={ (event) => { this.dropdownHandler( event, "isDestinationVisible" ) } }
                            changeDestination = { this.props.changeDestination } 
                            links={[ 
                                {title: "Africa", href: "#"},
                                {title: "Europe", href: "#"},
                                {title: "Americas", href: "#"},
                                {title: "Asia and Oceania", href: "#"}
                            ]}>
                        </Dropdown>

                        <Dropdown selected={ this.state.isAboutVisible } className={ Styles.dropdown } title="About us"
                            click={ (event) => { this.dropdownHandler( event, "isAboutVisible" ) } }
                            changeDestination = { () => {} }
                            links={[ 
                                {title: "Who we are", href: "#"},
                                {title: "Contact us", href: "#"},
                                {title: "Privacy Policy", href: "#"},
                                {title: "Subscribe to our newsletter!", href: "#", class: "subscribe"}
                            ]}>
                        </Dropdown>
                    </nav>

                    <div className={ Styles.searchBox }>
                        <input id="search-input" type="text" placeholder="Search" />
                        <button onClick={ this.searchHandler }>
                            <span className="fa fa-search"></span>
                        </button>
                    </div>

                </header>
                
                <div className={ searchMessageClasses.join( " " ) }
                    onClick={ () => { this.setState({ isSearchError: false }) } }>
                    No destination matches your search
                </div>
            
            </Fragment>
        );
    }
}

export default Header;