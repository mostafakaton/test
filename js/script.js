$(document).ready(function (){

    // Feather Icons
    feather.replace()


    // Declare Intro Carousel jquery object
    var owl = $('.intro-carousel');
  
    // Carousel initialization
    owl.owlCarousel({
        rtl:true,
        loop:false,
        margin:0,
        navSpeed:500,
        nav:false,
        autoplay: true,
        rewind: true,
        items:1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
  


    // Declare Intro Carousel jquery object
    var owlnews = $('.news-carousel');
  
    // Carousel initialization
    owlnews.owlCarousel({
        rtl:true,
        loop:false,
        margin:0,
        navSpeed:500,
        nav:false,
        autoplay: true,
        rewind: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

  
  });

