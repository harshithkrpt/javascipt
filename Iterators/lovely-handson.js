function iterator() {
  let step = 0;
  return {
    next: function () {
      step++;
      if (step == 1) {
        return { value: "😌", done: false };
      }
      if (step == 2) {
        return { value: "🤓", done: false };
      }
      if (step == 3) {
        return { value: "👵", done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

const iterable = {};

iterable[Symbol.iterator] = iterator;
console.log(...iterable);

Array.prototype[Symbol.iterator] = iterator;

let arr = [1, 2, 3, 4];
console.log(...arr);
