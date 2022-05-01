"use strict";

//ES5
// var helloES5 = function () {
//     console.log("hello ES5");
// }
// // function helloES5() {
// //     console.log("hello ES5");
// // }
// helloES5()
//ES6
// //es6 changes to es5 using babel
// let helloES6 = () => {
//     console.log("hello ES6");
// }
// helloES6()
// let helloES6 = () => console.log("hello ES6");
// helloES6()
// let multiplyES5 = function (x, y) {
//     return x * y
// }
// let multiplyES6 = (x, y) => x * y
// console.log(multiplyES5(1, 3));
// console.log(multiplyES6(3, 4));
var getProductES5 = function getProductES5(id, name) {
  return {
    id: id,
    name: name
  };
};

console.log(getProductES5(2, "1234"));

var getProductES6 = function getProductES6(id, name) {
  return {
    id: id,
    name: name
  };
};

console.log(getProductES6(3, "galax"));
var cars = [{
  name: "Audi",
  price: 1234
}, {
  name: "Bmw",
  price: 7457
}, {
  name: "Hyundai",
  price: 4363
}, {
  name: "Chevrolet",
  price: 2234
}];
var priceES5 = cars.map(function (car) {
  return car.price;
});
console.log(priceES5);
var priceES6 = cars.map(function (car) {
  return car.price;
});
console.log(priceES6);
var filterES5 = cars.filter(function (car) {
  return car.price >= 2000;
});
console.log(filterES5);
var filterES6 = cars.filter(function (car) {
  return car.price >= 2000;
});
console.log(filterES6);
var filterMapES6 = cars.filter(function (car) {
  return car.price >= 2000;
}).map(function (car) {
  return car.price;
});
console.log(filterMapES6);
