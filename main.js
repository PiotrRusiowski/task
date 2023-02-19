import "./src/css/style.css";
import { swiper } from "./src/swiper.js";

const slider = swiper;
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
