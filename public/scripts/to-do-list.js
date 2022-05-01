"use strict";

var root = document.querySelector(".root"); //npx babel src/app.js --out-file=public/scripts/app.js
//if you declared npm scripts then you can use it like npm run babel(or the that yu attended)
//if you dont want to write it over and over again, you should add --watch to the end of it
//onSubmit
//https://hakirac.medium.com/react-ile-form-i%C5%9Fleri-nas%C4%B1l-yap%C4%B1l%C4%B1r-ca8b4ca3445a
//https://tr.reactjs.org/docs/handling-events.html

var app = {
  title: "To-do List",
  description: "The list that shows my schedule of today",
  items: []
};

function onFormSubmit(event) {
  //https://yasinefemdalkilic.medium.com/javascript-stoppropagation-ve-prevent-default-kullan%C4%B1m%C4%B1-ve-fark%C4%B1-6a6cb11e570e#:~:text=Preventdefault%20kavram%C4%B1%20ilgili%20elementin%20taray%C4%B1c%C4%B1,davran%C4%B1%C5%9F%C4%B1%20engellemek%20i%C3%A7in%20preventdefault%20kullan%C4%B1r%C4%B1z.
  //preventing submit data which comes by form    
  event.preventDefault();
  var item = event.target.elements.text.value;

  if (item) {
    app.items.push(item);
    event.target.elements.text.value = "";
    render();
  }

  console.log("Form submitted");
}

function clear() {
  app.items = [];
  render();
}

function render() {
  var template = /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "lightblue"
    }
  }, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("h2", null, app.description), /*#__PURE__*/React.createElement("ul", null, app.items.map(function (item) {
    return /*#__PURE__*/React.createElement("li", null, item);
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: clear
  }, "Clear ALL")), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "text"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Item")));
  ReactDOM.render(template, root);
}

render();
