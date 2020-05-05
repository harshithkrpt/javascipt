// function square(number) {
//   return number * number;
// }

// square(10);

var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },
    getSex: function () {
      return sex;
    },
    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
console.table(pet.getName(), pet.setSex("male"), pet.getSex(), pet.getName());
