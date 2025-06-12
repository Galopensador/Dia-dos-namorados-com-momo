const swiper = new Swiper('.swiper', {
    // Ativar loop para repetir os slides
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10, // Corrigido o nome da propriedade
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 15,
        }
    }
});