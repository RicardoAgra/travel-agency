console.log( "Scroll Animation" );

window.onload = function() {
    var header = document.getElementById( 'header' );
    
    if( header ){
        var wasClassAdded = false;

        window.onscroll = function() {
            
            if( window.scrollY > 0 && !wasClassAdded ){
                header.style.height = "40px";
                wasClassAdded = true;
            }
            else if( ( window.scrollY === 0 ) && wasClassAdded ) {
                header.style.height = "80px";
                wasClassAdded = false;
            }
        }
    }
}