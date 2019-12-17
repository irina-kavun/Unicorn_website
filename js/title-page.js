//teamSwiper for mobile
let teamSwiper = new Swiper ('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//main content sliders
const sliders = [
    {initClass: '.swiper-container-business', prev: '.swiper-button-prev-bus', next: '.swiper-button-next-bus'},
    {initClass: '.swiper-container-education', prev: '.swiper-button-prev-ed', next: '.swiper-button-next-ed'},
    {initClass: '.swiper-container-sport', prev: '.swiper-button-prev-sp', next: '.swiper-button-next-sp'},
    {initClass: '.swiper-container-marketing', prev: '.swiper-button-prev-mark', next: '.swiper-button-next-mark'}];

generateSliders(sliders);
function generateSliders(array) {
    array.forEach((item, index) => {
        return new Swiper(item.initClass, {
            loop: true,
            pagination: {
                el: '.swiper-pagination' + '-' + index,
                type: 'fraction',
            },
            navigation: {
                nextEl: item.next,
                prevEl: item.prev,
            },
        });
    })
}