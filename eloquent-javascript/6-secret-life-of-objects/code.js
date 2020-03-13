// Encapsulation
// Hiding Data Local to a specific program or Private

let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = { type: "White", speak: speak };

speak.call(whiteRabbit, "Burp!");

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });

// PROTOTYPES
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let object = new (class {
  getWord() {
    return "hello";
  }
})();
console.log(object.getWord());
// → hello

console.log(Array.prototype.toString == Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]

// Maps

let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

let ages1 = new Map();
ages1.set("Boris", 39);
ages1.set("Liang", 22);
ages1.set("Júlia", 62);

console.log(`Júlia is ${ages1.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages1.has("Jack"));
// → Is Jack's age known? false
console.log(ages1.has("toString"));
// → false

// Ignores Object.prototype
console.log({ x: 1 }.hasOwnProperty("x"));
// → true
console.log({ x: 1 }.hasOwnProperty("toString"));
// → false

// Polymorphism
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

// Iterator Interface

// for(elem of iterable)

let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
