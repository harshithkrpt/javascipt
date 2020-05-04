// Closures

function makeAddr(a) {
  return function (b) {
    return a + b;
  };
}

var add5 = makeAddr(5);
var add20 = makeAddr(20);

console.dir(makeAddr(19));
add5(6); // returns 11
add20(7); // returns 27
