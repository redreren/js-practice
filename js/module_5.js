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

const createCharacter = function (type = "default", feature = "default") {
  this.type = type;
  this.feature = feature;
};

const human = new createCharacter("human", "knows js");
const mermaid = new createCharacter(
  "mermaid",
  "has a fish tail instead of legs"
);
