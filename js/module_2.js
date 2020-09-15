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
// const max = function () {};

// const max = function (...args) {
//   let result;
//   result = Math.max(...args);
//   console.log(result);

//   return result;
// };
// max(3, 8, 14, -7, -22);

// ---------- DAY 2 ---------------

// const humanCreate = function (skin, foot, gender, jewelry) {
//   return `Human with ${skin} skin and ${foot} feet size has been created`;
// };

// const humanCreate = (skin, foot, gender, jewelry) =>
//   `Human with ${skin} skin and ${foot} feet size has been created`;

// console.log(humanCreate("yellow", 7, "male", "none"));

// #2
// Напишите функцию hello(), которая при вызове будет принимать переменную name (например, «Василий») и
// выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»

// const greeting = function (name = "guest") {
//   console.log(`Hello, ${name}`);
// };

// greeting("Alex");

// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка

// const repeat = function (str = "", n = 2) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   console.log(result);
// };
// repeat("Whale", 7);

// #4
// здайте функцию avg() , которая будет находить среднее значение по всем своим аргументам
// (аргументы величины числовые).

// const avg = function (...args) {
//   let total = 0;
//   for (const argument of args) {
//     console.log(argument);
//     total += argument;
//   }
//   console.log(total);
//   const result = total / args.length;
//   console.log(result);
// };

// avg(5, 7, 2, 8, 9);

// ПРАКТИКА

// FUNCTION EXPRASSION

// var toShowName = function (firstName, secondName) {
//   console.log(`${firstName} ${secondName}`);
// };
// toShowName("Alfredo", "Viser");

// ARROW FUNCTION

// const toShowName = (firstName, secondName) =>
//   console.log(`${firstName} ${secondName}`);

// toShowName("Alfredo", "Viser");

//  FUNCTION DECLARATION

// toShowName("Alfredo", "Viser");

// function toShowName(firstName, secondName) {
//   console.log(`${firstName} ${secondName}`);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Logging clients: ", clients[i]);
// }

// // Итерация по массиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// const capitalize = function (string) {
//   let word = string.split(" ");
//   let arrCapitalize = [];
//   //   console.log(word);
//   for (let elem of word) {
//     // console.log(typeof elem);
//     let wordCapitilize = elem[0].toUpperCase() + elem.substring(1);
//     // console.log(wordCapitilize);
//     arrCapitalize.push(wordCapitilize);
//   }
//   return arrCapitalize.join(" ");
// };
// console.log(capitalize("the quick brown fox"));

// capitalize("the quick brown fox"); // 'The Quick Brown Fox '

// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті

// const vowels = "aeiouAEIOU";

// const countVowels = function (string) {
//   //   console.log(string);
//   let arr = string.split("");
//   //   console.log(arr);
//   let a = [];
//   for (let elem of arr) {
//     // console.log(elem);
//     if (vowels.includes(elem)) {
//       //   console.log("ok", elem);
//       a.push(elem);
//       //   console.log(a);
//     }
//   }
//   //   console.log(a);
//   console.log(a.length);
// };
// countVowels("the quick brown fox");

// countVowels('the quick brown fox') // 5

// // == task-3 == //
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem)
// і велечину базового шрифта("20px") і вертає конвертований розмір в пікселях

// // == task-4 == //
// Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

// const convertCelsiusToFahrenheit = function (celsius) {
//     const fahrenheit = Math.round(celsius * 1.8 + 32);
//     return fahrenheit;
// }
// console.log(convertCelsiusToFahrenheit(21));

// // == task-5 == //
// Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. 
// Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини)

// const calculateDogAge = function (dogAge) {
//     const humanYears = dogAge * 7;
//     return humanYears;
// }
// console.log(calculateDogAge(5));

// // == task-6 == //
// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex

// const rgbToHex = function (r, g, b) { 
//     let h = Number(r).toString(16);
//     let e = Number(g).toString(16);
//     let x = Number(b).toString(16);
//     // console.log(hex);
//     if (h.length < 2) {
//          h = "0" + h;
//     }
//     if (e.length < 2) {
//         e = "0" + e;
//     }
//     if (x.length < 2) {
//         x = "0" + x;
//     }
//     return `#${h}${e}${x}`;
//   };
//   console.log(rgbToHex(0, 0, 0));

// // == task-7 == //
// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

// // == task-8 == //
// Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5

//-------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// const findInArray = function (array, elem) {
//   for (let element of array) {
//     console.log(element);
//     if (elem === element) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(findInArray(arr, 100));

// -----------------

// const showThis = function(a, b) {
//     const show = function() {
//         console.log(this.a, this.b)
//     }
// }

// const user = {
//     name: "lika",
//     age: 20,
//     getKey() {
//         console.log(this.name, this.age)
//     }
// }
// user.getKey();

// ------------------

// let i = 0;
// let j = 0;
// // Желаемое количество строк
// let lines = 5;
// let space = "";
// let star = "";

// while (i < lines) {
//     space = "";
//     star = "";
//     // for (j = 0; j < lines - i; j++) space += " ";
//     for (j = 0; j < 2 * i + 1; j++) star += "*";
//     console.log(space + star);
//     i++;
// }

// -------------

// *****
// *****
// *****
// *****
// *****

// let lines = 5;

// for (let i = 0; i < lines; i++) {
//     let star = "";
//     for (let j = 0; j < lines; j++) star += "*";
//     console.log(star);
//     console.log('\n')
// }

// --------------

// *****
// ****
// ***
// **
// *

// let lines = 5;

// for(let i = 0; i < lines; i++) {
//     let star = "";
//     for(let j = 0; j < lines - i; j++){
//         star += "*";
//     }
//     console.log(star);
// }

// --------------

// *****
//  ****
//   ***
//    **
//     *

// let lines = 5;


// for(let i = 0; i < lines; i++) {
//     let star = "";
//     let space = "";
//     for(let j = 0; j < i; j++) {
//         space += " ";
//     }
//     for(let j = 0; j < lines - i; j++) {
//         star += "*";
//     }
//     console.log(`${space}${star}`)
// }

// -------------

// *
// **
// ***
// ****
// *****

// let lines = 5;

// for (let i = 0; i < lines; i++) {
//     let star = "";
//     for (let j = 0; j < i + 1; j++) star += "*";
//     console.log(star);
// }

//  ----------------

//     *
//    **
//   ***
//  ****
// *****

// let lines = 5;

// for(let i = 0; i < lines; i++) {
//     let star = "";
//     let space = "";
//     for(let j = 0; j < lines - i - 1; j++) {
//         space += " ";
//     }
//     for(let j = 0; j < i + 1; j++) {
//         star += "*";
//     }
//     console.log(`${space}${star}`)
// }

// -------------

// MULTIPLYING

// for (let i = 1; i < 10; i++) {
//     let result = i * i;
//     console.log(`${i} * ${i} = ${result}`)
// }