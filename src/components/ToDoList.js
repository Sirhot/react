import React from "react";
import ToDoListItems from "./ToDoListItems";

const ToDoList = (props) => {
    return (
        <div>

            <ul className="list-group">{
                props.items.map((item, index) =>
                    <ToDoListItems deleteItem={props.deleteItem} key={index} item={item} />)
            }
            </ul>
            {
                props.items.length > 0
                    ?
                    <p className="d-flex justify-content-end">
                        <button className="btn btn-outline-danger btn-sm mt-3" onClick={props.clear}>Clear Items</button>
                    </p>
                    :
                    <p className="alert alert-warning">First you should add items</p>
            }

        </div>
    )


}

export default ToDoList;