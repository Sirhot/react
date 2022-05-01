"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//React Component
//https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.
//Function Component
// const Header = function () {
//     return <h1>Hello React</h1>
// }
//Class Component
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("h1", null, this.props.title);
    }
  }]);

  return Header;
}(React.Component); //props class


var Desc = /*#__PURE__*/function (_React$Component2) {
  _inherits(Desc, _React$Component2);

  var _super2 = _createSuper(Desc);

  function Desc() {
    _classCallCheck(this, Desc);

    return _super2.apply(this, arguments);
  }

  _createClass(Desc, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("p", null, this.props.description);
    }
  }]);

  return Desc;
}(React.Component); // //props functions
// const Desc = function (props) {
//     return <p>{props.description}</p>
// }


var ToDoListItems = /*#__PURE__*/function (_React$Component3) {
  _inherits(ToDoListItems, _React$Component3);

  var _super3 = _createSuper(ToDoListItems);

  function ToDoListItems(props) {
    var _this;

    _classCallCheck(this, ToDoListItems);

    _this = _super3.call(this, props);
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ToDoListItems, [{
    key: "deleteItem",
    value: function deleteItem() {
      this.props.deleteItem(this.props.item);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.item, /*#__PURE__*/React.createElement("button", {
        onClick: this.deleteItem
      }, "x"));
    }
  }]);

  return ToDoListItems;
}(React.Component);

var ToDoList = /*#__PURE__*/function (_React$Component4) {
  _inherits(ToDoList, _React$Component4);

  var _super4 = _createSuper(ToDoList);

  function ToDoList() {
    _classCallCheck(this, ToDoList);

    return _super4.apply(this, arguments);
  }

  _createClass(ToDoList, [{
    key: "render",
    value: //https://www.w3schools.com/js/js_function_bind.asp
    function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(ToDoListItems, {
          deleteItem: _this2.props.deleteItem,
          key: index,
          item: item
        });
      })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.clear
      }, "Clear Items")));
    }
  }]);

  return ToDoList;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component5) {
  _inherits(Action, _React$Component5);

  var _super5 = _createSuper(Action);

  function Action(props) {
    var _this3;

    _classCallCheck(this, Action);

    _this3 = _super5.call(this, props);
    _this3.onFormSubmit = _this3.onFormSubmit.bind(_assertThisInitialized(_this3));
    _this3.state = {
      error: ''
    };
    return _this3;
  }

  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.text.value.trim();
      var error = this.props.addItem(item);
      this.setState({
        error: error
      });
      e.target.elements.text.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "text"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);

  return Action;
}(React.Component);

var ToDoListFull = /*#__PURE__*/function (_React$Component6) {
  _inherits(ToDoListFull, _React$Component6);

  var _super6 = _createSuper(ToDoListFull);

  function ToDoListFull(props) {
    var _this4;

    _classCallCheck(this, ToDoListFull);

    _this4 = _super6.call(this, props);
    _this4.clear = _this4.clear.bind(_assertThisInitialized(_this4));
    _this4.addItem = _this4.addItem.bind(_assertThisInitialized(_this4));
    _this4.deleteItem = _this4.deleteItem.bind(_assertThisInitialized(_this4));
    _this4.state = {
      items: ['item1', 'item2']
    };
    return _this4;
  }

  _createClass(ToDoListFull, [{
    key: "clear",
    value: function clear() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return 'eklemek istediğiniz elemanı girin';
      } else if (this.state.items.indexOf(item) > -1) {
        return 'aynı elemanı ekleyemezsiniz';
      }

      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var app = {
        title: "To-do List",
        description: "The list that shows my schedule of today"
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: app.title
      }), /*#__PURE__*/React.createElement(Desc, {
        description: app.description
      }), /*#__PURE__*/React.createElement(ToDoList, {
        items: this.state.items,
        deleteItem: this.deleteItem,
        clear: this.clear
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }));
    }
  }]);

  return ToDoListFull;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(ToDoListFull, null), document.querySelector(".root"));
