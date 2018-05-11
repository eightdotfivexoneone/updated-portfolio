// superslides can be used with jquery
$(document).ready(function() {

    $('#slides').superslides({
        animation: 'slide',
        play: 5000,
    });


    // no jquery file so calls code straight js
    var typed = new Typed(".typed", {
      strings: ["Artist,", "Designer", "and most recently...", "Fledgeling Full Stack Developer"],
      typeSpeed: 60,
      loop: false,
      startDelay: 1000,
      showCursor: false
    });

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
        }
      }
    });

    // Load the pie charts on scroll

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countupFinished = false;
    

    $(window).scroll(function() {

      if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

        $('.chart').easyPieChart({
              easing: 'easeInOut',
              barColor: '#fff',
              trackColor: false,
              scaleColor: false,
              lineWidth: 4,
              size: 152,
              onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
              }
          });

      }

      if(! countupFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
        $('.counter').each(function() {
          var element = $(this);
          var endVal = parseInt(element.text());

          element.countup(endVal);
    
        })

        countupFinished = true;

      }


    });

 
    $("[data-fancybox]").fancybox();
    
    $(".items").isotope({
      filter: '*',
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });

    $("#filters a").click(function() {

      $("#filters .current").removeClass("current");
      $(this).addClass("current");
  
      var selector = $(this).attr("data-filter");
  
      $(".items").isotope({
        filter: selector,
        animationOptions: {
          duration: 1500,
          easing: 'linear',
          queue: false
        }
      });
  
      return false;
    });

});
