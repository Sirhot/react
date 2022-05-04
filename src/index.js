import React from 'react';
import ReactDOM from 'react-dom';

// const template = React.createElement("p", {}, "hello react we created it without using babel");
const template = <p>Hello React</p>
ReactDOM.render(template, document.getElementsByClassName("root"));