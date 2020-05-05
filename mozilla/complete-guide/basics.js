// Enhanced Object Literals

const handler = "This is a Handler";

const obj = {
  __proto: "TheProtoObject",
  handler,
  toString() {
    return "d " + super.toString();
  },
  ["prop_" + (() => 42)()]: 42,
};

console.log(obj);

// Regex Literals

const re = /ab+c/;
