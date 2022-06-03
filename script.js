"use strict";
let arr = {};

for (let i = 0; i < 7; i++) {
  arr[i] = Math.random() * (1000 - 1) + 1;
  arr[i] = Math.round(arr[i]);
  arr[i] = String(arr[i]);

  if (arr[i].split("")[0] === "2" || arr[i].split("")[0] === "4") {
    console.log(arr[i]);
  }
}

console.log("Весь массив", arr);

function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

//2
const numArr = [2];
const falseArr = [];
const newArr = [];

//формирую начальный массив
for (let i = 1; i < 101; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0 && i % 2 !== 0) {
      numArr.push(i);
    }
  }
}

//Нахожу те числа которые делились более чем 2 раза, т.е. не подходили под условия простого числа и пушу их в массив не подходящих чисел
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] == numArr[i + 2]) {
    falseArr.push(numArr[i]);
  }
}

// Если число из начального массива совпадает с числом из массива неподходящих чисел, то такое число удаляю
for (let i = 0; i < numArr.length; i++) {
  for (let j = 0; j < falseArr.length; j++) {
    if (numArr[i] === falseArr[j]) {
      delete numArr[i];
    }
  }
}

//Из массива подходящих чисел уладяю повторы и undefined и пушу в конечный массив
for (let i = 0; i < numArr.length; i++) {
  if (
    numArr[i] !== numArr[i + 1] &&
    numArr[i] !== 1 &&
    numArr[i] !== undefined
  ) {
    console.log("Число: ", numArr[i], "делится на", 1, "и на", numArr[i]);
    newArr.push(numArr[i]);
  }
}
