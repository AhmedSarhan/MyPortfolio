AOS.init();

$(document).ready(function () {
    'use strict';



// change the navbar background color on scroll
    $(window).scroll(function(){
        var nav_area = $(".navbar");
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
         nav_area.addClass("sticky_navigation");
        }
        else{
            nav_area.removeClass("sticky_navigation");
        }
    });

// change the color of the navbar element on scorll
    var scroll_start = 0;
    var homeChange = $("#home");
    var aboutChange = $('#about');
    var servicesChange = $('#services');
    var portfolioChange = $('#portfolio');
    var contactChange = $('#contact');

    var home = homeChange.offset();
    var about = aboutChange.offset();
    var services = servicesChange.offset();
    var portfolio = portfolioChange.offset();
    var contact = contactChange.offset();

    // home section
     if (homeChange.length){
        $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
        if(scroll_start >= home.top) {
            $(".nav-item").removeClass("active");
             $(".home-link").addClass("active");
        } else {
            $(".home-link").removeClass("active");
        } 
    
    });
    } 

    // about section
     if (aboutChange.length){
        $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start >= about.top) {
            $(".nav-item").removeClass("active");
             $(".about-link").addClass("active");
        } else {
            $(".about-link").removeClass("active");
        }
    });
    } 


    // services section
     if (servicesChange.length){
        $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start >= services.top) {
            $(".nav-item").removeClass("active");
             $(".services-link").addClass("active");
        } else {
            $(".services-link").removeClass("active");
        }
    });
    } 
        // portfolio section
        if (portfolioChange.length){
            $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start >= portfolio.top) {
                $(".nav-item").removeClass("active");
                $(".nav-link").css("color", "#333333 !important");
                 $(".portfolio-link").addClass("active");
            } else {
                $(".portfolio-link").removeClass("active");
            }
        });
        } 
        // contact section
        if (contactChange.length){
            $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start >= contact.top) {
                $(".nav-item").removeClass("active");
                 $(".contact-link").addClass("active");
            } else {
                $(".contact-link").removeClass("active");
            }
        });
        } 
// change the color of the menu for white backgrounds


// portfolio slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
  effect: 'coverflow',
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 'auto',  
  spaceBetween: 10,
  loop: false,
  freeMode: false,
  loopedSlides: 2, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true, },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: false,
  loopedSlides: 2, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});


// the portfolio buttons show and hide events

$("#all").click(function(){
    $(".swiper-slide").show();
});
$("#static").click(function(){
    $(".swiper-slide").hide();
    $(".swiper-slide.static").show();
});
$("#dynamic").click(function(){
    $(" .swiper-slide").hide();
    $(".swiper-slide.dynamic").show();
});
$("#vue").click(function(){
    $(" .swiper-slide").hide();
    $(".swiper-slide.vue").show();
});

});


function validateForm(){
	var name = document.forms["getintouch"]["your-name"].value;
    var email = document.forms["getintouch"]["your-email"].value;
    var message = document.forms["getintouch"]["your-message"].value;

	if (name.length<1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    if (message.length<1) {
        document.getElementById('error-message').innerHTML = " Please Enter Your message *";
    }             
    if(name.length<1 || email.length<1 || message.length<1){
       	return false;
    }            
}
