(function($){
  $(document).ready(function(){

    $('#content a').tipsy({ gravity: 'e' }).click(function(evt) {
      evt.preventDefault();
      $(this).tipsy('load', this.href);
    });
    
    //.click(function(evt) {
    //  evt.preventDefault();
    //  
    //  //var tip = $(this).tipsy(true);      
    //  //console.log('loading', tip);
    //
    //  //tip.load(this.href);
    //  
    //});
    
  });
})(jQuery);
