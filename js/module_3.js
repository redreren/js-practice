//!________OBJECTS

// const testObj = {
//   test: "123",
// };
// testObj.test = "test";
// // delete testObj.test;
// console.log(testObj["test"]);

// let name = "Resort Hotel";
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };

// /*
//  * ES6 Shorthand properties
//  * Имя ключа будет аналогично имени переменной
//  * Значение свойства будет равно значению переменной
//  */
// const es6hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}

// const obj = {
//   defaultValue: 0,
//   add: function () {
//     obj.defaultValue += 1;
//     const a = 10;
//     return a;
//   },
//   onDecrement: function () {
//     obj.defaultValue -= 1;
//   },
// };

// obj.add();
// obj.add();
// obj.add();
// obj.add();
// obj.add();
// obj.onDecrement();

// console.log(obj);

// let increment = obj.add;
// // console.log(increment);

// increment();
// obj.mul = function (n) {
//   obj.defaultValue *= n;
// };

// obj.mul(3);

// console.log(obj);

// -----------------------------

// const object = {
//   defaultValue: 0,
//   add: function (n) {
//     object.defaultValue += n;
//   },
//   onDecrement: function (n) {
//     object.defaultValue -= n;
//   },
//   multiply: function (n) {
//     object.defaultValue *= n;
//   },
//   divide: function (n) {
//     object.defaultValue /= n;
//   },
//   showMe: function () {
//     console.log(`The final value is: ${object.defaultValue}`);
//   },
// };
// object.add(5);
// object.onDecrement(4);
// object.multiply(6);
// object.divide(2);
// console.log(object);
// object.showMe();

// ------------------------

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let total = 0;

// for (let key in obj) {
//   console.log(`${key} is equal to ${obj[key]}`);
//   total += obj[key];
// }
// console.log(total);

// -----------------------

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.entries(obj)[1][1]);
// console.log(Object.entries(obj)[1][2]);
// console.log((Object.entries(obj)[1][2] = 4));
// console.log(Object.entries(obj)[1][0]);
// console.log(Object.entries(obj)[1]);

// ------------SPREAD---------------

// let obj1 = {
//   a: 1,
//   b: 2,
// };

// let obj2 = {
//   b: 5,
//   c: 7,
// };

// let obj3 = { ...obj1, obj2 };

// console.log(obj3);

// let obj4 = { ...obj1, ...obj2 };

// console.log(obj4);

// let obj5 = { q: 15, ...obj1, p: 20, ...obj2 };

// console.log(obj5);

// let r = 12;
// let w = 18;
// let obj6 = { w, ...obj1, r, ...obj2 };

// console.log(obj6);

// ------------REST-------------

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// ------------ДЕСТРУКТУРИЗАЦИЯ--------------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   status: "semilux",
// };

// // console.log(name);

// const { name = hotelName, stars = 0, capacity = 0, status = "vip" } = hotel;

// // console.log(name, stars, capacity);
// console.log(status);
// console.log(hotel);

// ------------ ЗАДАЧКИ
// const getMeEven = function () {
//   for (const elem of arguments) {
//     if (elem % 2 === 0) {
//       console.log(elem);
//     }
//   }
// };

// getMeEven(1, 2, 3, 4, 5, 6, 7, 8, 9);

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
// больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = function (n) {
//   if (n > 0 && n < 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// isNumberInRange(1);
// isNumberInRange(16);
// isNumberInRange(-11);
// isNumberInRange(5);

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false
// var str = ‘яблоbко‘;
// var arr = [‘банан‘, ‘яблоко‘, ‘персик’];
