import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  centeredSlides: false,
  loop: false,
  spaceBetween: -20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
