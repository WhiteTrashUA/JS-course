// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//   return age > 18 || confirm("Батьки дозволили?");
// }
// console.log(checkAge(12));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(1, 3));

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("Ви скасували виконання."),
// );

// ask(
//   "Ви згодні?",
//   () => console.log("Yes."),
//   () => console.log("No."),
// );

// ask(
//     "Ви згодні?",
//     () => document.getElementById("#mainemu").hidden = false;,
//   () => console.log("No."),
// );
