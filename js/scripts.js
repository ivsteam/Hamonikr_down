/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
//  $('#portfolio').magnificPopup({
//    delegate: 'a',
//    type: 'image',
//    tLoading: 'Loading image #%curr%...',
//    mainClass: 'mfp-img-mobile',
//    gallery: {
//      enabled: true,
//      navigateByImgClick: true,
//      preload: [0, 1]
//    },
//    image: {
//      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//    }
//  });


$(window).on('load', function(){
  // element val
  var ele_total = jQuery('#total_count');
  var me_count = jQuery('#me_count');
  var mdev_19_1_tessa_count = jQuery('#moordev_19_1_tessa_count');
  var mdev_19_tara_2_0_count = jQuery('#moordev_19_tara_2_0_count');
  var mdev_18_tara_1_0_count = jQuery('#moordev_18_tara_1_0_count');

  // comma
  function cf(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // get n set download count
  function get_set_count(element, name){
    if(element.text() != 'loading...') return;

    // count val
    var count_data;

    jQuery.ajax({
      url: 'https://hamonikr.org/linkfile/get_download_count.php?name=' + name,
      dataType: 'json',
      async : true,
      success : function(data){
        count_data = data[0].down_count;
        jQuery(element).html(0);

        jQuery({ val : 0 }).animate({ val : count_data }, {
          duration : 600,
          step : function(){
            element.text(cf(Math.floor(this.val)));
          },
          complete : function(){
            element.text(cf(Math.floor(this.val)));
          }
        });

      },
      error : function(data){
        console.log(' - not connected download count');
      }
    });
  }

  // total count
  get_set_count(ele_total, 'Total');
});

})(jQuery); // End of use strict
