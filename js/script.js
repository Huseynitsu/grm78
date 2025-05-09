$(document).ready(function () {
    var swiper = new Swiper(".mainSwiper", {
        autoplay: false,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });

    var swiperRey = new Swiper(".reyler", {
        autoplay: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
    });
    
    Fancybox.bind("#feedback img", {
      groupAll: true,
    });
})

const header = document.querySelector('.header');
const secondHeader = document.querySelector('.second-header');

window.addEventListener('scroll', () => {
    // Əgər ekran eni 1024 piksel və ya daha böyükdürsə
    if (window.innerWidth >= 1024) {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
            secondHeader.classList.add('show');
        } else {
            header.classList.remove('scrolled');
            secondHeader.classList.remove('show');
        }
    } else {
        // Kiçik ekranlarda hər iki class-ı sil (əgər varsa)
        header.classList.remove('scrolled');
        secondHeader.classList.remove('show');
    }
});