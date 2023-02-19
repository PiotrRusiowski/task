import "./style.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const listItems = document.querySelectorAll("#myList li");
const numbers = document.querySelectorAll(".num");
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

////////////number countdown
let interval = 5000;
const countdown = (interval) => {
  numbers.forEach((number) => {
    let startValue = 0;
    const endValue = +number.getAttribute("value");

    let duration = Math.floor(interval / endValue);

    const counter = setInterval(() => {
      startValue++;
      if (endValue > 2000) {
        startValue += 4;
      }
      number.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
};
countdown(interval);
/////

const mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 1,
  slidesPerView: 5,
  centeredSlides: true,
  roundLengths: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
