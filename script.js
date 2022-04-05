"use strict";
let title = prompt("Название проекта");
let newArr;

const func = function (str) {
  if (str !== null) {
    if (!isNaN(parseFloat(str)) && isFinite(str)) {
      title = prompt("Передана не строка");
      func(title);
    } else {
      title = title.trim().split("");
      console.log(title);
      if (title.length > 30) {
        for (let i = title.length; i > 30; i--) {
          delete title[i];
        }
        title = title.join("");
      }
      alert(title + "...");
      console.log(typeof title, title.length, title);
    }
  }
};

func(title);
