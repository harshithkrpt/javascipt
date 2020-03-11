const square = function(x) {
  return x * x;
};

console.log(square(12));

const makeNoise = function() {
  console.log("Pling");
};

makeNoise();

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

// Scoping

let x = 10;
if (true) {
  let y = 20;
  let z = 30;
  console.log(x + y + z);
}
// console.log(x + z);

const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100000));
console.log(n);

// Nested Scope
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

// Functions as Values

let launchMissiles = function() {
  console.log("Hello");
};

if (true) {
  launchMissiles = function() {
    console.log("Hello Inside");
  };
}

launchMissiles();

// Declaration Notation

function square2(x) {
  return x * x;
}

// above code is function defination
console.log("The Future Says: ", future());

function future() {
  return "You'll never have flying cars";
}

// Arrow Functions

const power2 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

const square3 = x => {
  return x * x;
};
// Automatic Return
const square4 = x => x * x;

// No Params
const hello = () => "hello";

// Call Stack - Every Function Call Added to Stack and After Execution it Will be Released

// Infiniy Call Stack
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

// console.log(chicken() + " came first");

// Optional Arguments

function square5(x) {
  return x * x;
}

console.log(square5(4, true, "Optional Parameter"));

// IMPORTANT too many args are ignored and to few args are by default called undefined

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

// Defualt Parameters

function power3(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
console.log(power(2, 6));

// IMPORTANT CLOSURE

function wrapValue(n) {
  let local = n;
  return () => local;
}
console.log("---------");
let wrap1 = wrapValue(1);

console.log(wrap1());

// What is Closure
/*
    The Above Feature being able to reference a specific instance of a local binding from local scopes is called CLOSURE IMPORTANT

    or 

    A function that references bindings from local scopes around it is called a closure.
*/

// Below Code Flexibility of Closure
console.log("---------");

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(2));

console.log("---------");
// RECURSION

// Function Calls Itself is called Recursion

function power4(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power4(base, exponent - 1);
  }
}

console.log(power4(2, 3));

// A Recursive solution

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(13));

// Functions and Side Effects

// A Pure Function is a Function that function call has no side effects to other part of code
