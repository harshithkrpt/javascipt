function range(start, end, step = 1) {
  let arr = [];
  if (start < end)
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  else
    for (let i = start; i >= end; i -= step) {
      arr.push(i);
    }
  return arr;
}

function sum(arr) {
  let value = 0;
  arr.forEach(val => {
    value += val;
  });
  return value;
}

console.log(range(1, 14, 3));
console.log(sum(range(1, 10)));
