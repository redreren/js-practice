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

let myName = "Lika";
const age = 19;
let bootcamp = 24;
console.log(`My name is ${myName}, I am ${age} years old, I study with bootcamp ${bootcamp}`)