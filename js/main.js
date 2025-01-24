(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    //start set nav bar items click evenets

    let nav_items = document.querySelectorAll(".nav-item");
    for (let nav_item of nav_items) {
        nav_item.addEventListener('click', function () {
            clearActiveBtn();
            event.preventDefault();

            // Get the height of the navbar
            var navbarHeight = document.querySelector('.navbar').offsetHeight;

            // Get the target section
            var targetSection = document.getElementById(nav_item.getAttribute("section_name"));
            nav_item.classList.add("active");

            // Scroll to the target section, adjusted by the navbar height
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    }

    function clearActiveBtn() {
        for (let nav_item of nav_items) {
            nav_item.classList.remove("active");
        }
    }
    //end set nav bar items click evenets




    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll('section');
        // Scroll event listener
        window.addEventListener('scroll', function () {
            let currentSection = null;

            // Loop through each section and check if it's in the viewport
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 6 && rect.bottom >= window.innerHeight / 6) {

                    clearActiveBtn();
                    for (let nav_item of nav_items) {
                        if (nav_item.getAttribute("section_name") == section.id) {
                            nav_item.classList.add("active");
                        }
                    }
                }
            });
        });
    });


})(jQuery);




