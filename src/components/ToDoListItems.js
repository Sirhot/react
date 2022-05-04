import React from 'react';


const ToDoListItems = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.item}
            <button className='btn btn-danger btn-sm' onClick={() => props.deleteItem(props.item)}>x</button>
        </li>
    );

}

export default ToDoListItems;