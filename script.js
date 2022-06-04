"use strict";

const timer = () => {
  const timerNumHours = document.querySelector(".timer__numbers-hours");
  const timerNumMin = document.querySelector(".timer__numbers-minutes");
  const timerNumSec = document.querySelector(".timer__numbers-seconds");
  const timerNumDay = document.querySelector(".timer__numbers-day");
  const timerNumMount = document.querySelector(".timer__numbers-month");
  const timerNumYear = document.querySelector(".timer__numbers-year");

  const timerTopHours = document.querySelector(".timer__top-hours");
  const timerTopMin = document.querySelector(".timer__top-minutes");
  const timerTopSec = document.querySelector(".timer__top-seconds");
  const timerTopDay = document.querySelector(".timer__top-day");
  const timerTopMount = document.querySelector(".timer__top-month");
  const timerTopYear = document.querySelector(".timer__top-year");

  const date = new Date();

  const years = date.getFullYear();
  const month = date.getMonth();
  const dateMonth = date.getDate();
  const dayWeek = date.getDay();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const fMonth = month < 10 ? "0" + month : month;
  const fDays = dateMonth < 10 ? "0" + dateMonth : dateMonth;
  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  const funcHours = (value, words) => {
    value = value % 100;

    const lastNum = value % 10;

    if ((value > 10) & (value < 20)) return value + " " + words[2];
    if (lastNum > 1 && lastNum < 5) return value + " " + words[1];
    if (lastNum === 1) return value + " " + words[0];
    return value + " " + words[2];
  };

  const funcMin = (value, words) => {
    value = value % 100;

    const lastNum = value % 10;

    if ((value > 10) & (value < 20)) return value + " " + words[2];
    if (lastNum > 1 && lastNum < 5) return value + " " + words[1];
    if (lastNum === 1) return value + " " + words[0];
    return value + " " + words[2];
  };

  const funcSec = (value, words) => {
    value = value % 100;

    const lastNum = value % 10;

    if ((value > 10) & (value < 20)) return value + " " + words[2];
    if (lastNum > 1 && lastNum < 5) return value + " " + words[1];
    if (lastNum === 1) return value + " " + words[0];
    return value + " " + words[2];
  };

  const week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  const seasons = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентрября",
    "октября",
    "ноябвря",
    "декабря",
  ];

  timerNumHours.textContent = fHours;
  timerNumMin.textContent = fMinutes;
  timerNumSec.textContent = fSeconds;
  timerNumDay.textContent = fDays;
  timerNumMount.textContent = fMonth;
  timerNumYear.textContent = years;

  timerTopYear.textContent = years + " года,";

  timerTopHours.textContent = funcHours(hours, ["час", "часа", "часов"]);
  timerTopMin.textContent = funcMin(minutes, ["минута", "минуты", "минут"]);
  timerTopSec.textContent = funcSec(seconds, ["секунда", "секунды", "секунд"]);

  week.forEach((elem, index) => {
    if (dayWeek == index + 1) {
      timerTopDay.textContent = elem;
    }
  });

  seasons.forEach((elem, index) => {
    if (month == index) {
      timerTopMount.textContent = month + " " + elem;
    }
  });
};

timer();

setInterval(timer, 500);
