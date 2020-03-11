function isEven(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num < 0) {
    return isEven(-num);
  }
  return isEven(num - 2);
}

console.log(isEven(-12));
