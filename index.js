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

// --------------------------

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

let num = 10;
let boolNum = Boolean(num);
console.log(boolNum);

num = 0;
boolNum = Boolean(num);
console.log(boolNum);

let str = `Lika`;
let boolStr = Boolean(str);
console.log(boolStr);

str = ``;
boolStr = Boolean(str);
console.log(boolStr);

str = ` `;
boolStr = Boolean(str);
console.log(boolStr);

let isOpen;
console.log(isOpen);
console.log(typeof isOpen);

let boolUnd = Boolean(isOpen);
console.log(boolUnd);
console.log(typeof boolUnd);

isOpen = null;
console.log(isOpen);
console.log(typeof isOpen);

let boolNull = Boolean(isOpen);
console.log(boolNull);
console.log(typeof boolNull);