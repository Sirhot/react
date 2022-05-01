"use strict";

// JSX-Javascript XML
var root = document.querySelector(".root"); // npx babel src/app.js --out-file=public/scripts/app.js
// if you declared npm scripts then you can use it like npm run babel(or the that yu attended)
// if you dont want to write it over and over again, you should add --watch to the end of it

var product = {
  name: "Xenor",
  desc: "Exceptional",
  price: "1000",
  types: ["red", "black"]
};

function formatPrice(p) {
  return p.price + "$";
}

function getDesc(p) {
  if (p.desc) {
    return /*#__PURE__*/React.createElement("p", {
      className: "product-desc"
    }, "description: ", p.desc);
  }
}

var template2 = /*#__PURE__*/React.createElement("div", {
  "class": "page-details"
}, /*#__PURE__*/React.createElement("h2", {
  className: "product-name"
}, "name: ", product.name ? product.name : "no name"), product.price && product.price > 0 && /*#__PURE__*/React.createElement("p", {
  className: "product-price"
}, "price: ", product.price, " $"), getDesc(product), /*#__PURE__*/React.createElement("p", null, product.types.length > 0 && product.types ? "there are options" : "no options")); //as i understood, you can use it just once

ReactDOM.render(template2, root);
