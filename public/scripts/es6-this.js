"use strict";

var _arguments = typeof arguments === "undefined" ? void 0 : arguments;

var user = {
  name: "serhat",
  email: "qwerty@info.com",
  city: "Kocaeli",
  roles: ["admin", "customer"],
  // getRoles: function () {
  //     const that = this//we assign this.name to that, in this way we could use it in another scope or function
  //     this.roles.forEach(function (role) {//es5 function produces a new scope therefore we cant reach name directly inside of function
  //         console.log(role)
  //         console.log(that.name);
  //     })
  // }
  getRoles: function getRoles() {
    var _this = this;

    this.roles.forEach(function (role) {
      //es6- there isnt a new scope. we can use this.
      console.log(role);
      console.log(_this.name);
    });
  }
};
user.getRoles();

var addES5 = function addES5() {
  var total = 0; //arguments.forEach- i tried it but it didnt work. what is the problem boiii? error= arguments.forEach is not a function
  //solution= https://stackoverflow.com/questions/44434622/js-arguments-foreach-is-not-a-function

  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}; //there is no any new scope thats why arguments doesnt work


var addES6 = function addES6() {
  console.log(_arguments);
};

console.log(addES5(5, 10, 15, 20));
addES6(5, 10, 15, 20);
