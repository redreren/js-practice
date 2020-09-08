"use strict";
// let b = 1;
// // b = 2;
// console.log(b);

// const c = 2;
// console.log(c);

// -------------------------

// let a = 1;
// let b = 2;
// // let c = a + b;
// console.log(a + b);
// alert("hello world");

// -------------------------

// let a = 1;
// let b = "1";

// let c = a + b;

// console.log(c);

// -----------------

// let a = 1;
// let b = 2;

// console.log(a < b);
// console.log("first: ", 1 < 2 < 3, "second: ", 3 > 2 > 1);
// console.log((1.1 * 10 + 1.3 * 10) / 10);

// -----------------
// const name = 'Lika';
// let age = prompt(`Put your age here`);
// console.log(typeof age);
// console.log(age);
// // age = +age;
// age = Number(age);
// console.log(typeof age);
// console.log(age);
// const message = 'Hello ' + name;
// console.log(message);
// const newMessage = `My age is ${age}`;
// console.log(newMessage);
// age = 44;
// console.log(newMessage);
// console.log(typeof age)
// let answer = confirm(`are you over 18 years old ?`);
// console.log(answer);
// console.log(typeof answer);
// let newQuestion = `Do you like JS?`;
// let newAnswer = confirm(newQuestion);
// console.log(newAnswer);
// console.log(typeof newAnswer);

// let num = 10;
// let boolNum = Boolean(num);
// console.log(boolNum);

// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);

// let str = `Lika`;
// let boolStr = Boolean(str);
// console.log(boolStr);

// str = ``;
// boolStr = Boolean(str);
// console.log(boolStr);

// str = ` `;
// boolStr = Boolean(str);
// console.log(boolStr);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean(isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// --------DAY 2------------

// let vova = {
//   age: 16,
//   dad: "deputat",
// };

// if (vova.age >= 18) {
//   alert("Prohodi paren");
// } else if (vova.dad === "deputat") {
//   alert("Prohodi paren");
// } else {
//   alert("Izvini brat");
// }

// if (vova.age >= 18 || vova.dad === "deputat") {
//   alert("Prohodi paren");
// } else {
//   alert("Izvini brat");
// }

// vova.age >= 18 || vova.dad === "deputat"
//   ? alert("Prohodi paren")
//   : alert("Izvini brat");

// ------------------------

// const PASSWORD = "ilovejs";

// let prompt1 = prompt("Enter your name, please: ");
// console.log(prompt1);

// if (prompt === PASSWORD) {
//   console.log("Zahodi Vasilii");
// } else {
//   console.log("Ya tebyane znayu");
// }

// if (prompt1) {
//   prompt1 === PASSWORD
//     ? console.log("You're in")
//     : console.log("Wrong password");
// } else {
//   alert("You have to enter the password");
// }

// ---------------------------

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// --------------------

// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//     c = 4;
// }

// console.log(c)

// ------------------

// let q;

// while (q !== null) {
//     q = prompt('enter your number: ');
//     console.log(q)
// }

// while

// --------------------

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// -------------- individual practice

// let myage = 19;
// let hisage = 23;
// let result = myage + hisage;
// console.log(result)

// let r = 10;
// const p = 3.14159265359;
// let result = p * (Math.pow(r, 2));
// console.log(result)

// let myName = "Lika";
// const age = 19;
// let bootcamp = 24;
// console.log(`My name is ${myName}, I am ${age} years old, I study with bootcamp ${bootcamp}`)

// let a = 10;
// a = 20;
// let b = a.append + a;

// ===================== ADDITIONAL ========================== //
// == task-1 == //
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні) Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

// == task-4 == //
// Написати програму яка буде знаходити суму, різницю, добуток, частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)

// == task-5 == //
// Написати програму яка буде переводити температуру з цельсія в фаренгейти, або навпаки з фаренгейта в цельсії

// == task-6 == //
// Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

// == task-7 == //
// Написати програму де користувач вводить 3 числа, після вводу всіх трьох чисел йому на екрані показується найбільше з них. Додатково перевіряти чи це взагалі числа

// == task-8 == //
// Написати програму яка переведе введену оцінку студента до болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// == task-9 == //
// Написати програму яка отримає від користувача число (кількість хвилин) і виведе на екран строку в форматі години і хвилини Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1

// == task-10 == //
// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми бачимо результат на екпані хто виграв

// // && ищет true до конца или спотыкается на первом false
// console.log(1 && true && "js"); // js
// console.log(0 && true && "js"); // 0
// console.log(1 && false && "js"); // false
// console.log(1 && "false" && "js"); // js

// // || ищет false до конца или спотыкается на первом true
// console.log(0 || false || "" || "1"); // 1
// console.log(0 || false || "" || undefined); // undefined
// console.log(1 || true || "fff" || undefined); // 1
// console.log(0 || true || "" || undefined); // true

// let userAge = 23;
// if (userAge >= 20 && userAge <= 30) {
//     console.log("Возраст пользователья от 20 до 30 лет");
// }
// userAge = 32;
// if (userAge >= 20 || userAge <= 30) {
//     console.log("Возраст пользователья от 20 до 30 лет");
// }
