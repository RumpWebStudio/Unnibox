// Testimonial Slider
const firstSwiper = new Swiper(".testimonials__slider", {
    slidesPerView: 4,
    speed: 500,
    spaceBetween: 30,
    pagination: {
        el: '.testimonials__pagination',
        type: 'progressbar'
    },

    breakpoints: {
        100: {
            slidesPerView: 1
        },
        831: {
            slidesPerView: 2
        },
        1255: {
            slidesPerView: 3
        },

        1660: {
            slidesPerView: 4
        }
    }
})