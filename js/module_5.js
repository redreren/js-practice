// const CarCreator = function (
//   name = "default",
//   age = "default",
//   color = "default",
//   fuelType = "default",
//   weight = "default",
//   speed = "default"
// ) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.fuelType = fuelType;
//   this.weight = weight;
//   this.speed = speed;

//   this.checkAcceleration = function () {
//     this.acceleration = this.weight * this.speed;
//     console.log(this.weight * this.speed);
//   };
// };

// const ferrari = new CarCreator("Ferrari", 5, "pink", "gas", 1200, 320);
// console.log(ferrari);
// ferrari.checkAcceleration();

// -----------------

// const CakeMaker = function (
//   amountOfLayers = "default",
//   sprinkles = "default",
//   typeOfBiscuit = "default",
//   frostingTaste = "default",
//   height = "default",
//   diameter = "default"
// ) {
//   this.amountOfLayers = amountOfLayers;
//   this.sprinkles = sprinkles;
//   this.typeOfBiscuit = typeOfBiscuit;
//   this.frostingTaste = frostingTaste;
//   this.height = height;
//   this.diameter = diameter;

//   this.checkAmountOfPleasure = function () {
//     this.amountOfPleasure = this.height * this.diameter;
//     console.log(this.height * this.diameter);
//   };
// };

// const vanillaCake = new CakeMaker(4, "rainbow", "vanilla", "vanilla", 20, 10);
// console.log(vanillaCake);
// vanillaCake.checkAmountOfPleasure();

// ---------------

// class Cats {

// constructor(whiskers, teeth, tail, claws) {
//   this.whiskers = whiskers;
//   this.teeth = teeth;
//   this.tail = tail;
//   this.claws = claws;
// }

// get catsInfo() {
//   console.log(`Everyone in Cats class has mrrrrr-engine`)
// }

// }

// class Lion extends Cats {

//   constructor(whiskers, teeth, tail, claws, mane) {
//     super(whiskers, teeth, tail, claws);
//     this.mane = mane;
//   }

//   get showMeRoar() {
//     console.log('Roar!')
//   }

//   set setName(name) {
//     this.name = name;
//   }

//   get getName () {
//     console.log(this.name)
//   }

// }

// let jack = new Lion(true, true, true, true, true);
// // console.log(jack)
// jack.showMeRoar
// jack.setName = 'Jack';
// jack.getName;

// class HouseCats extends Cats {

//   constructor(whiskers, teeth, tail, claws, fur) {
//     super(whiskers, teeth, tail, claws);
//     this.fur = fur;
//   }

//   get showMeLove() {
//     console.log('Prrrrrmeow')
//   }

//   set setName(name) {
//     this.name = name;
//   }

//   get getName () {
//     console.log(this.name)
//   }

// }

// let jedi = new HouseCats('covered in milk', 'harmless', 'adorable', 'playful', 'the softest');

// console.log(jedi);
// jedi.showMeLove;
// jedi.setName = 'Jedi';
// jedi.getName;

// --------------

// let borys = {
//   name: 'Borys',
//   xp: 200
// }

// class Hero {
//   constructor({name, xp}) {
//     this.name = name;
//     this.xp = xp;
//   }
// }

// let hero1 = new Hero(borys);
// console.log(hero1);

// ---------------------

// const car = {
//   maxSpeed: 200, 
//   price: 2000, 
//   speed: 60, 
//   isOn: true, 
//   distance: 100
// };
// Car.getSpecs(car);
// let {maxSpeed, price, speed, isOn, distance} = car;
// console.log(maxSpeed);
// console.log(price);

// ------------------

// let user = {
//   name: "Mango",
//   age: 102,
//   email: "aa@BhxBrowser.com",
//   isAdmin: false,
//   address:{
//     street: "Almazova",
//     city: "Kyiv",
//     home: 10
//   },
//   hobbies: ["football", "beer", "tv"]
// }
// let{email, age, address:{city}, address:{home}, hobbies:[football, beer, tv]} = user;
// console.log(city);
// console.log(home);
// console.log(beer);

// --------------------

// let fruits = ["bananas", "melon", "apple"]
// let [,,a] = fruits;
// // console.log(b);
// console.log(a);

// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// 1. Метод що запитує в користувача 2 числа
// 2. Метод що додає ці числа
// 3. Метод що віднімає ці числа
// 4. Метод що перемножує ці числа
// 5. Метод що ділить ці числа
// 6. Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// 7. Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// 8. Передати в метод №7 колбек ф-ю що підносить числа в степінь
// 9. Написати всі методи і перевірити чи вони працюють


// // == task-2 == //
// Створити класи Library та Book

// 1. Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// - Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
// - Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// - Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// - Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// - Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// - Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// - Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

// 2. Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// - author
// - title
// - price
// - totalPages
// - currentPage

// Також цей клас буде мати такі методи:

// - Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// - Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// - Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта 

// // == task-3 == //

// const specialPunch = [
//     { name: "fatality", weapons: "sword", damage: 50, price: 3000 },
//     { name: "babality", weapons: "knife", damage: 10, price: 2000 },
//     { name: "brutality", weapons: "nunchak", damage: 25, price: 1000 },
// ]
// class Hero {
//     constructor() {
//         this._name = "";
//         this.hp = 0;
//         this.speed = 0;
//         this.punchForce = 0;
//         this._weapons = [];
//         this.specialPunch = "";
//     }
//     addHp(value) {
//         this.hp += value;
//     }
//     killHero(value) {
//         this.hp -= value;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         return (this._name = newName)
//     }
//     get weapons() {
//         return this._weapons;
//     }
//     set weapons(weapon) {
//         if(!this._weapons.includes(weapon)) {
//             return this._weapons.push(weapon);
//         } else console.log('Такое оружие уже есть');
//     }
//     chooseSpecialPunch(array, value) {
//         for(const obj of array) {
//             if(obj.name === value) {
//                 return (this.specialPunch = obj)
//             }
//         }
//     }
// }
// const Lui = new Hero();
// console.log(Lui);
// Lui.name = "Sasha";
// console.log(Lui.name);
// Lui.chooseSpecialPunch(specialPunch, "brutality")
// console.log(Lui);

// // == task-4 == //

// Реализуйте класс Student (Студент), который будет наследовать от класса User, 
// подобно тому, как это сделано в теоретической части урока. 
// Этот класс должен иметь следующие свойства: 
// name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), 
// year (год поступления в вуз). 
// Класс должен иметь метод getFullName() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
// Текущий год получите самостоятельно.
// class User {
//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }
//     get fullName() {
//         return `${this._name} ${this._surname}`
//     }
// }
// class  Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     getCourse(currentYear) {
//         return currentYear - this.year;
//     }
// }
// const Lika = new Student("Lika", "Goncharova", 2014);
// console.log(Lika);
// console.log(Lika.getCourse(2020));
