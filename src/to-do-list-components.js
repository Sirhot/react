import React from 'react';
import ReactDOM from 'react-dom';
//using way without cdn
import ToDoListFull from './components/ToDoListFull';
import './style/main.scss';

//React Component
//https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.

//Function Component
// const Header = function () {
//     return <h1>Hello React</h1>
// }

// //Class Component
// class Header extends React.Component {
//     render() {
//         return <h1>{this.props.title}</h1>
//     }
// }

// //props functions
// const Desc = function (props) {

//     return <p>{props.description}</p>

// }

// class ToDoListItems extends React.Component {
//     constructor(props) {
//         super(props);
//         this.deleteItem = this.deleteItem.bind(this);
//     }

//     deleteItem() {
//         this.props.deleteItem(this.props.item)
//     }

//     render() {
//         return (
//             <li>
//                 {this.props.item}
//                 <button onClick={this.deleteItem}>x</button>
//             </li>
//         );
//     }
// }
// class ToDoList extends React.Component {
//     //https://www.w3schools.com/js/js_function_bind.asp
//     render() {
//         return (
//             <div>

//                 <ul>{
//                     this.props.items.map((item, index) =>
//                         <ToDoListItems deleteItem={this.props.deleteItem} key={index} item={item} />)
//                 }
//                 </ul>
//                 <p>
//                     <button onClick={this.props.clear}>Clear Items</button>
//                 </p>
//             </div>
//         )

//     }
// }

ReactDOM.render(<ToDoListFull />, document.querySelector(".root"));
