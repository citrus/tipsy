(function($){
  $(document).ready(function(){

    $('#content a').tipsy({ gravity: 'w' }).click(function(evt) {
      evt.preventDefault();
      $(this).tipsy('load', this.href);
    });
    
  });
})(jQuery);
