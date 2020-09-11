// const greeting = function () {
//   let name = "Johny";
//   sayHiToUser(name);
// };

// const sayHiToUser = function (name) {
//   console.log(name);
// };

// greeting();

// ------------------

// const printSmth = function (n, str) {
//   for (let i = 1; i < n; i++) {
//     console.log(`${i} ${str}`);
//   }
// };

// printSmth(11, "elephants going over the river");
// printSmth(4, "ships going over the river");

// const countAnimals = function (n, str) {
//   let i = 1;
//   while (i <= n) {
//     console.log(`${i} ${str}`);
//     i += 1;
//   }
// };

// countAnimals(5, "zebras");

// -------------------

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// Передаем printValue как callback-функцию
// repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

// -------------------

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, (fruit) => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// const fruitsBananas = filter(fruits, (fruit) => fruit.name === "bananas");
// console.log(fruitsBananas);

// -----------------------

// const filter = function (arr, test) {
//   const filteredElems = [];

//   for (const elem of arr) {
//     const passed = test(elem);

//     if (!passed) {
//       filteredElems.push(elem);
//     }
//   }

//   return filteredElems;
// };

// const community = [
//   { name: "John", salary: 200, isActiveWorker: true },
//   { name: "Derek", salary: 150, isActiveWorker: false },
//   { name: "Anna", salary: 100, isActiveWorker: true },
//   { name: "Mariia", salary: 50, isActiveWorker: false },
//   { name: "Tony", salary: 100, isActiveWorker: true },
// ];

// const workersToKeep = filter(
//   community,
//   (worker) => worker.salary > 100 && worker.isActiveWorker === false
// );
// console.log(workersToKeep);

// ------------------

// console.log("q");
// const fn1 = function () {
//   console.log("w");
//   fn2();
// };

// const fn2 = function () {
//   console.log("e");
// };

// const fn3 = function () {
//   console.log("r");
//   fn1();
// };

// const fn4 = function () {
//   console.log("t");
//   fn3();
// };

// console.log("y");
// fn4();

// ---------------------
