let num = 266219;
let sum = 1;
let value;

for (i = 0; i < num.toString().length; i++) {
  value = num.toString().split("")[i];
  sum = +value * sum;
}
console.log(sum);

console.log(sum ** 3);

console.log((sum ** 3).toString().substring(0, 2));
