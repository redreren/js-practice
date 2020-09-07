// DAY 1 CLASSWORK

// const arr = ['Mango', 'Polly', 'Ajax', 2, 3, 4, {
//     a: 1,
//     b: 2
// }, false];

// for (let i = 0; i < arr.length; i++) {

//     console.log(`Element №${i+1}: ${arr[i]}`)

// }

// for (let el of arr) {
//     console.log(el)
// }

// ----------------------

// const arr2 = [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3]
// ]
// const arr3 = [];

// for (let el of arr2) {

//     for (let i = 0; i < el.length; i++) {
//         console.log(el[i])
//         arr3.push(el[i]);
//     }
// }
// console.log(arr3);

// ------------------------------

// let a = 1;
// let b = a;
// a = 2;
// b = a;
// console.log(b);

// const obj = {
//     name: 'John',
//     surname: 'Vick'
// };
// console.log('obj: ', obj);
// const objCopy = obj;
// console.log('objCopy', objCopy)

// obj.name = 'Vasilii';
// console.log(objCopy)

// ----------------------------

//? $ Методы split() и join()

// let str = "Hello world, I'm Johny";
// console.log(str.split(" "));
// console.log(str.split("o"));
// console.log(str.split(""));
// console.log(str.split("").join(''));
// console.log(str.split(",").join(''));
// console.log(str.split(",").join(','));
// console.log(str.split("").join(' '));

// ---------------------------

//? $ Методы indexOf() и includes()

// let q = {
//     a: 1,
//     b: 2
// };
// let e = q;

// const arr = ['Mango', e, 'Ajax', 2, 3, 4, q, false];

// console.log(arr.indexOf(e));

// let a = {
//     a: 1,
//     b: 2
// };
// let b = a;
// console.log(a === b)

// -------------------------------

//? $ Методы push(), pop(), shift(), unshift()

// let arr = [];
// arr.push('1');
// arr.push('2');

// console.log(arr);

// arr.pop()
// console.log(arr);
// arr.unshift('0');
// console.log(arr);
// arr.shift();
// console.log(arr);

// -------------------------------

// let str = 'AVA';
// let str2 = str.split('').reverse().join('');
// console.log(str === str2);

//? $ Метод slice()

// let arr = [1, 2, 3]
// let newArr = arr.slice(1, 2);
// console.log(newArr);

//? $ Метод splice()

// let arr = [1, 2, 3]
// arr.splice(1, 0, 'hello');
// console.log(arr);

// ЗАДАЧКА

// const styles = ['Джаз', 'Блюз'];
// console.log(styles);

// styles.push('Рок-н-ролл');
// console.log(styles);

// // styles[1] = 'Классика';
// // console.log(styles);       ????????????????????

// console.log(styles.shift());
// console.log(styles);

// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// --------------- ФУНКЦИИ -------------------

//! $ Понятие ФУНКЦИИ

// const fn = function (a = 0, b = 0, c = 0, d = 0) {
//   console.log(a, b, c, d);
// };
// fn(1);

//? Псевдомассив arguments

// const showMeArguments = function (...args) {
//   console.log(args);
// };
// showMeArguments("Thor", "Black Widow", "Ant Man");

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let arr2 = [6, 7, 8];

// let newArr = [...arr, ...arr2];

// console.log(newArr);

// -----------------------

// const add = (...arg) => {
//   for (let el of arg) {
//     console.log(el);
//   }
//   return 1;
// };

// console.log(add(1, 2, 3));

// ЗАДАЧКИ

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//   Сделайте два варианта функции checkAge:
//   Используя оператор ?
//   Используя оператор ||

// #6
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
// const max = function () {}

// ----------- ПРАКТИКА -------------