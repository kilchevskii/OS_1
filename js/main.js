$('.tournament-image-container').slick({
    mobileFirst: true,
    fade: true,
    responsive: [{
        breakpoint: 768,
        settings: 'unslick'
    }],
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    infinite: true,
    slickCurrentSlide: true
    // pauseOnHover: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
});

new Swiper('.swiper-container', {

    slidesPerView: 1,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        effect: 'fade',

    // cubeEffect: {
    //     // slideShadows: true,
    //     shadow: false,
    //     shadowOffset: 0,
    //     shadowScale: 0
    // },

    // effect: 'coverflow',
    //
    // coverflowEffect: {
    //     rotate:20,
    //     stretch: 50,
    //     // slideShadows: true,
    // },

        speed: 800,
});

$(document).ready(function() {
    $(".accordion-item__trigger").click(function() {
        $(this).next(".accordion-item__content").slideToggle({
            duration: 300,
            easing: "swing"});
    });
});

$(document).ready(function() {
    $(".accordion-item__trigger").click(function() {
        $(this).find(".svg-chevron").toggleClass('active');
    });
});

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

  if ( $(window).width() <= 768 ) {  


        var burger = "";
        var menu = "";
    document.addEventListener("DOMContentLoaded", function() {
    burger = document.getElementById('burger')
    menu = document.getElementById('mobile-menu')
    burger.onclick = toggleBurger
    // menu.onclick = toggleMenu
    });
    function toggleBurger() {
    if(burger.classList.contains("active")){
        burger.classList.remove("active");
        menu.classList.remove("active");
        document.body.style.overflow = 'hidden';
    } else {
        burger.classList += " active";
        menu.classList += " active";
        
    }}


jQuery(document).ready(function($) {
$('#mobile-menu ul li').click(function() {
    menu.classList.remove("active");
    burger.classList.remove("active");
});

});
  }


