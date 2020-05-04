function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};

Person.prototype.toString = function () {
  return "<Person: " + this.fullName() + ">";
};
