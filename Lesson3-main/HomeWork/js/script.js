//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// console.log(fruts);
// const namess = fruts.map(item => item.name);
// console.log(namess);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i < 10; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// let i = 0;
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let a = 0;
// while (a < 5) {
//   console.log(`Цифра ${a}`);
//   a++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let value = +prompt("Введіть число більше за 100");
//   console.log(value);
//   if (value === "" || isNaN(value) || value === 0 || value > 100) {
//     break;
//   } else {
//     continue;
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// const girlsAge = girls.map(item => item.age);
// console.log(girlsAge);
// let summ = girlsAge.reduce((sum, item) => sum + item) / girlsAge.length;
// console.log(summ);

// let summ = girls.reduce((sum, item) => sum + item.age, 0) / girls.length;
// console.log(summ);
