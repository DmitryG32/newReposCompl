let lang = prompt("'ru' или 'en' ?");
let langArr = [];
let namePerson = prompt("Артем или Александр?", "Артем Александр");

if (lang === "ru") {
  console.log(
    " Понедельник \n Вторник \n Среда \n Четверг \n Пятница \n Суббота \n Воскресенье"
  );
} else if (lang === "en") {
  console.log(
    " Monday \n Tuesday \n Wednesday \n Thursday \n Friday \n Saturday \n Sunday"
  );
} else {
  console.log("Введено неверное значение");
}

switch (true) {
  case lang === "ru":
    console.log(
      " Понедельник \n Вторник \n Среда \n Четверг \n Пятница \n Суббота \n Воскресенье"
    );
    break;
  case lang === "en":
    console.log(
      " Monday \n Tuesday \n Wednesday \n Thursday \n Friday \n Saturday \n Sunday"
    );
    break;

  default:
    console.log("Введено неверное значение");
    break;
}

langArr["ru"] = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
langArr["en"] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(langArr[lang]);

let result =
  namePerson === "Артем"
    ? "Директор"
    : "студент" && namePerson === "Александр"
    ? "Препрдаватель"
    : "студент";
console.log(result);
