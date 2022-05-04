import React from 'react';


const ToDoListItems = (props) => {
    return (
        <li>
            {props.item}
            <button onClick={() => props.deleteItem(props.item)}>x</button>
        </li>
    );

}

export default ToDoListItems;