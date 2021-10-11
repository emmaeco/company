$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000 ms = 2 sec
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        },

    }
});



$('.btn span').click(function(){
    $('nav  div.items ul').toggleClass("show");
    $('nav div li.btn span').toggleClass("show");
});