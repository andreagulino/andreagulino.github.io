// toggle up and down button and manage expansion
function togglePublications(){
    $('#publications').toggleClass('expanded');
    if($('#togglePubButton').hasClass('fa-chevron-down')) {
        $('#togglePubButton').removeClass('fa-chevron-down');
        $('#togglePubButton').addClass('fa-chevron-up');
    } else {
        $('#togglePubButton').removeClass('fa-chevron-up');
        $('#togglePubButton').addClass('fa-chevron-down');
    }

}

// setup the slideshow
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(window).on("load", function() {
    // weave your magic here.
    $(".full-name").delay("1000").queue(function (next) { 
        $(this).css('visibility', 'visible'); 
        next(); 
    });


    $("#main-container").fadeIn( 400 );
});