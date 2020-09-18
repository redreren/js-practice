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

// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) 
// Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } 
// const orderA = { apple: 5, cheese: 1, bread: 3 } 
// const orderB = { orange: 10, pork: 2, bread: 1 }

// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// const SIZES = {
// BIG: { price: 25, cal: 100, time: 15 },
// SMALL : { price : 15, cal: 50, time: 7 },
// MEDIUM: { price : 15, cal: 50, time: 7 }
// },
// const STUFFING = {
// CHEESE: { price : 6.5, cal: 45, time: 2 },
// BEACON : { price : 10, cal: 70, time: 6 },
// TOMATO : { price : 12.1, cal: 4, time: 5 },
// CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
// }
// const SAUCES = {
// MUSTARD: { price : 3, cal: 5, time: 1 },
// KETCHUP = { price : 4.2, cal: 20, time: 1.5 },
// BOLOGNESE = { price : 7.5, cal: 50, time: 3 }
// }
// Створити всі методи і перевірити чи вони працюють
