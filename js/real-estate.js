const sliders = [
  {initClass: '.swiper-container-office1', prev: '.swiper-button-prev-off1', next: '.swiper-button-next-off1'},
  {initClass: '.swiper-container-Bel1', prev: '.swiper-button-prev-bel1', next: '.swiper-button-next-bel1'},
  {initClass: '.swiper-container-BelInterior1', prev: '.swiper-button-prev-belInt1', next: '.swiper-button-next-belInt1'},
  {initClass: '.swiper-container-Bel2', prev: '.swiper-button-prev-bel2', next: '.swiper-button-next-bel2'},
  {initClass: '.swiper-container-Bel3', prev: '.swiper-button-prev-bel3', next: '.swiper-button-next-bel3'},
  {initClass: '.swiper-container-BelInterior2', prev: '.swiper-button-prev-belInt2', next: '.swiper-button-next-belInt2'},
  {initClass: '.swiper-container-BelInterior3', prev: '.swiper-button-prev-belInt3', next: '.swiper-button-next-belInt3'},
  ];

generateSliders(sliders);
function generateSliders(array) {
  array.forEach((item, index) => {
    return new Swiper(item.initClass, {
      loop: true,
      pagination: {
        el: '.swiper-pagination-real' + '-' + index,
        type: 'fraction',
      },
      navigation: {
        nextEl: item.next,
        prevEl: item.prev,
      },
    });
  })
}
