//////////////////////////// Smooth Scroll /////////////////////////////

(function($) {
    $(document).ready(function() {
        $('#navAffix').affix({
              offset: {
                top: $('#headerContainer').height() 
              }
              
        }); 
    });
    
    $(".navLink").on('click',  function(event){
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top 
    }, 500);
});
    
})( jQuery );