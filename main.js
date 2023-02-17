import "./style.css";
import Swiper from "swiper/bundle";

import "swiper/css/bundle";
const listItems = document.querySelectorAll("#myList li");
let activeItem = null;
listItems.forEach((item, index) => {
  item.clicks = 0;
  item.addEventListener("click", () => {
    listItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
    if (item !== activeItem) {
      item.clicks++;
      console.log(`Kliknięć na elemencie ${index + 1}: ${item.clicks}`);
    }
    activeItem = item;
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
