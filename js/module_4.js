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

// const hotel1 = {
//   name: "Rixios",
//   stars: "5",
//   capacity: 300,
// };
// const hotel2 = {
//   name: "Jazz",
//   stars: "5",
//   capacity: 200,
// };
// const hotel3 = {
//   name: "Dnepr",
//   stars: "2+",
//   capacity: 5000,
// };
// const greeting = function (userName) {
//   console.log(`Hello, ${userName}. Welcome to ${this.name}`);
// };
// greeting.call(hotel1, "Alfredo");
// const rixiosGreeting = greeting.bind(hotel1);
// rixiosGreeting("John");

// ---------------------
// !ПЕРЕСМОТРИ ЭТО КОГДА БУДЕШЬ ЧИТАТЬ ЭТОТ МОДУЛЬ

// let obj, method;

// obj = {
//   go: function () {
//     console.log(this);
//   },
// };
// obj.go();

// (obj.go)();

//   (method = obj.go)();

// (obj.go || obj.stop)();

// console.log(obj.go || obj.stop);

// ----

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().down().showStep(); // 1

// -----------

const createActor = function (name) {
  const obj = {
    name: movies,
  };
  return function (movie) {
    console.log(`${name} ${movie}`);
    movies.push(movie);
  };
};

const movies = [];

const Brad = createActor("Brad Pit");
Brad("jdjd");
const Johnny = createActor("Johnny Depp");
Johnny("Pirates of the Carribean");
console.log(movies);
// const list = {
//   "Johnny Depp": ["Pirates of the Carribean", "The Tourist"],
//   "Brad Pitt": ["Fight club", "Ocean's eleven"],
// };
// name = Object.keys(list);
// movies = Object.values(list);

// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();

// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3

// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)

// // == task-2 == //
// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

// some([1,2,3,23,5], callback) // true (перевіряємо чи елементи > 10)
// some([12,45,67,34], callback) // false (перевіряємо чи елементи < 10)
// // == task-3 == //
// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false

// compact([1,0,'', null, 'Hello']) // [1,'Hello']

// // == task-4 == //
// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

// Якщо прогрес доставки 100 показувати строку "Done"

// Якщо прогрес доставки < 100 показувати строку "In progress"

// Якщо прогрес доставки null показувати строку "Ready for delivery"

// const ordersA = [
// { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
// { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// const ordersB = [
// { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
// showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"
