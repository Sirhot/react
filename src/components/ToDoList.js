import React from "react";
import ToDoListItems from "./ToDoListItems";

const ToDoList = (props) => {
    return (
        <div>

            <ul>{
                props.items.map((item, index) =>
                    <ToDoListItems deleteItem={props.deleteItem} key={index} item={item} />)
            }
            </ul>
            <p>
                <button onClick={props.clear}>Clear Items</button>
            </p>
        </div>
    )


}

export default ToDoList;