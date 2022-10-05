$(document).ready(function(){

  $('#testimonials-slider').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:4000,
    // autoplayHoverPause:true,
    responsiveClass:true,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });



  $('#service-slider').owlCarousel({
    loop:true,
    // center: true,
    margin:10,
    nav:false,
    navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>","<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
    dots:true,
    // autoplay:true,
    // autoplayTimeout:2000,
    // autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})



});






/*----------------------------
 Gallery
------------------------------ */
 "use strict";
    $("a.gallery").prettyPhoto({theme: 'dark_rounded', social_tools:false});






/*****************mega-portfolio********************/

var api=jQuery('.megafolio-container').megafoliopro(
    {
      filterChangeAnimation:"pagemiddle",  // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
      filterChangeSpeed:800,          // Speed of Transition
      filterChangeRotate:99,          // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
      filterChangeScale:0.6,          // Scale Animation Endparameter
      delay:20,               // The Time between the Animation of single mega-entry points
      paddingHorizontal:50,          // Padding between the mega-entrypoints
      paddingVertical:50,
      layoutarray:[10]    // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.

    });

  // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
  jQuery('.filter').click(function() {  
      jQuery('.filter').removeClass("active");
      api.megafilter(jQuery(this).data('category'));    
      jQuery(this).addClass("active");
  });





  var counted = 0;
  $(window).load(function() {
  
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 5000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
      counted = 1;
    }
  
  });  