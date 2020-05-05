/* for (let step = 0; step < 5; step++) {
  console.log("Walking east one step");
} */

/* let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
 */

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }

// Labelled Statement

// When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
// When you use break with a label, it terminates the specified labeled statement.

// The syntax of the break statement looks like this:

// break;
// break [label];

// continue;
// continue [label];

/* let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i++;
  checkj: while (j > 4) {
    console.log(j);
    j--;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j + "is odd");
  }
  console.log("i = " + i);
  console.log("j = " + j);
} */

let obj = { name: "harshith", email: "test@test.com" };

for (let i in obj) {
  console.log(i + ":" + obj[i]);
}

// For of

// iterates over iterable objects
// Array, Set, Map, arguments

const arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
