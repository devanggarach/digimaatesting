/* menu overlay toggle js
last code edited by - Devang
last modified date - 5th May, 2020 */
(function($) {
    $(function() {
      $('.toggle-overlay').click(function() {
        $('aside').toggleClass('open');
      });
    });
  })(jQuery);
  
/* explore_services page section highlight js
last code edited by - Devang
last modified date - 6th May, 2020 */
$(window).scroll(function(){

  $('.back_section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top + $(this).height() || $(window).scrollTop() < $(this).offset().top)
          $(this).addClass('highlight');
      else
          $(this).removeClass('highlight');
  });

});

function checkInput(ob) {
  var invalidChars = /[^0-9]/gi
  if(invalidChars.test(ob.value)) {
            ob.value = ob.value.replace(invalidChars,"");
      }
}