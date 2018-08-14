window.onload = function() {
    var header = document.getElementById( 'header' );
    var offset = 250;
    
    if( header ){
        var wasUpdated = false;

        window.onscroll = function() {
            
            if( window.scrollY > offset && !wasUpdated ){
                header.classList.add( "hasScrolled" );
                wasUpdated = true;
            }
            else if( ( window.scrollY <= offset ) && wasUpdated ) {
                header.classList.remove( "hasScrolled" );
                wasUpdated = false;
            }
        }
    }
}