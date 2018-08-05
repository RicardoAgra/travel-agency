window.onload = function() {
    var header = document.getElementById( 'header' );
    
    if( header ){
        var wasUpdated = false;

        window.onscroll = function() {
            
            if( window.scrollY > 0 && !wasUpdated ){
                header.classList.add( "hasScrolled" );
                wasUpdated = true;
            }
            else if( ( window.scrollY === 0 ) && wasUpdated ) {
                header.classList.remove( "hasScrolled" );
                wasUpdated = false;
            }
        }
    }
}