// Info sliders
const swiper = new Swiper(".info__slider", {
    navigation: {
        nextEl: '.info__button-next',
        prevEl: '.info__button-prev'
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
})

const secondSwiper = new Swiper(".info__facts-slider", {
    navigation: {
        nextEl: '.info__button-next',
        prevEl: '.info__button-prev'
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
})

//composotion slider
const compositionButtons = document.querySelectorAll(".composition__button");
const numberOfSlides = 6;

const compositionSlider = new Swiper(".composition__slider", {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    slidesPerView: 1,
});

compositionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        let slideIndex;
        if (index < numberOfSlides - 1) {
            slideIndex = (index + 1) % numberOfSlides;
        } else {
            slideIndex = numberOfSlides - 1;
        }
        compositionSlider.slideToLoop(slideIndex, 500);
    });
});



//instruction slider
const thirdSwiper = new Swiper(".instruction__slider", {
    slidesPerView: 1.2,
    speed: 500,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    slideWidthAuto: true,
    breakpoints: {
        100: {
            slidesPerView: 1
        },
        1250: {
            slidesPerView: 1.2
        }
    }
})