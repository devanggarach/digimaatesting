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

/* index page section change anchor tag highlight js
last code edited by - Devang
last modified date - 5th May, 2020 */
  $(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
});

/* explore_services page section highlight js
last code edited by - Devang
last modified date - 6th May, 2020 */
$(window).scroll(function(){

  $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top + $(this).height() || $(window).scrollTop() < $(this).offset().top)
          $(this).addClass('highlight');
      else
          $(this).removeClass('highlight');
  });

});