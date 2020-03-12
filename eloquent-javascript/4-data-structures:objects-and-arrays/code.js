let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);

// console.log(listOfNumbers);
// console.log(new String().toUpperCase);

// Object Creation
let day1 = {
  squirrel: false,
  events: ["Work", "Touched Tree", "Pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
console.log(day1.events);

// Delete Keyword

delete day1.events;
console.log(day1);

// in Operator to Check whether property is present or not
console.log("events" in day1);

// Object.keys()

console.log(Object.keys({ a: 1, b: 2 }));

// Object.assign() Copy 2nd param objects to 1 st param object

console.log(Object.assign({ a: 1, b: 2 }, { c: "a", d: 3 }));
console.log(typeof []);
console.log(typeof Array);

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth"
    ],
    squirrel: false
  },
  { events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true }
  /* and so on... */
];

console.log(journal);

// Mutability -> Objects

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;

console.log(object1, object2);

let journal1 = [];

function addEntry(events, squirrel) {
  journal1.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth"
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal1);

// includes method in array
let arr = [1.343, 245, 3534];

let a = arr.includes(1.3);

for (let elem of [1, 2, 3]) {
  console.log(elem, a);
}

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

// Strings and Properties

let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
console.log("  okay \n ".trim());
console.log(String(6).padStart(3, "0")); // add 0 2 times before 6

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));

// Rest Parameters

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

// Spread Operator
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

// Math Object
console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

// Destructuring

function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}

let { name } = { name: "Farji", age: 23 };

console.log(name);

// JSON

let string = JSON.stringify({ hello: "Name" });
console.log(string);
console.log(JSON.parse(string));
