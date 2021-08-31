@@include('../../node_modules/jquery/dist/jquery.js');
@@include('../../node_modules/swiper/js/swiper.js');
@@include('../../node_modules/perfect-scrollbar/dist/perfect-scrollbar.js');

document.addEventListener("DOMContentLoaded", function(event) {
    
    var swiper = new Swiper('.colection-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
});

$(document).ready(function() {
  $('.js-scroll').each(function(index, elem){
      var ps = new PerfectScrollbar(elem, {
          wheelSpeed: 10,
          wheelPropagation: true,
          maxScrollbarLength: 46,
      });

      var isDrag = false;
      var lastX = 0;
      $(elem).on('mousedown', function(event) {
        isDrag = true;
        lastX = event.pageX;
      });
      $(document).on('mousemove', function(event) {
        if(isDrag) {
          var currentX = event.pageX;
          var delta = lastX - currentX;
          $(elem).scrollLeft($(elem).scrollLeft() + delta);
          lastX = currentX;
        }
      })
      $(document).on('mouseup', function() {
        isDrag = false;
      });

      $(window).on('resize', function(){
          ps.update();
      });
  })
})