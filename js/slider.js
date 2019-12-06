

/* Home Section 2 */

    var swiper = new Swiper('.swiper-container_sec_2', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });