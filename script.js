"use strict";
const body = document.querySelector("body");
let divBlock = document.createElement("div");
let date = new Date();
let day = date.getDay();

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

week.forEach((elemDay, index) => {
  let spanDay = document.createElement("span");

  spanDay.innerHTML = elemDay;
  spanDay.style.display = "block";

  divBlock.append(spanDay);

  if (elemDay === "Суббота" || elemDay === "Воскресенье") {
    spanDay.style.fontStyle = "italic";
  }

  if (index == day - 1) {
    spanDay.style.fontWeight = "700";
  }
});

body.append(divBlock);
