"use strict";
//1
/* let arr = {};

for (let i = 0; i < 7; i++) {
  arr[i] = Math.random() * (1000 - 1) + 1;
  arr[i] = Math.round(arr[i]);
  arr[i] = String(arr[i]);

  if (arr[i].split("")[0] === "2" || arr[i].split("")[0] === "4") {
    console.log(arr[i]);
  }
}

console.log("Весь массив", arr); */

/* function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function getPrimes(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(getPrimes(120)); */

//function declaration
// Можно запустить перед определением !!!
testFunction();

function testFunction(/* аргументы */) {
  const x = 5;
  const y = 5;
  console.log(x + 5);
}

/* Если надо сохранить значение переменнйо после отработки функции , то эту переменную надо указывать вне функции , или создавать кажыдй раз внутри функции
 Пр:  */

let num = 9;

function count() {
  num++;
  console.log(num);
}

count(); //10
count(); //11
count(); //12

function coun2() {
  let d = 9;
  d++;
  console.log(d);
}

coun2();
coun2();
coun2();
