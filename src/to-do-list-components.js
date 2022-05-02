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

//stateless es6 function component
const Header = (props) => {
    return <h1>{props.title}</h1>

}

//props class
class Desc extends React.Component {
    render() {
        return <p>{this.props.description}</p>
    }
}

// //props functions
// const Desc = function (props) {

//     return <p>{props.description}</p>

// }

const ToDoListItems = (props) => {
    return (
        <li>
            {props.item}
            <button onClick={() => props.deleteItem(props.item)}>x</button>
        </li>
    );

}

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

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }

    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.text.value.trim();
        const error = this.props.addItem(item);
        this.setState({
            error: error
        })
        e.target.elements.text.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="text" />
                    <button type="submit">Add Item</button>
                </form>

            </div>

        )
    }
}

class ToDoListFull extends React.Component {
    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ['item1', 'item2']
        }
    }

    // https://tr.reactjs.org/docs/react-component.html
    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('items'))

        if (items) {
            this.setState({
                items: items
            })

        }
    }

    //storing data using localstorage
    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);

        }
    }

    componentWillUnmount() {
        console.log("component silindi.");
    }

    clear() {
        this.setState({
            items: []
        })
    }

    addItem(item) {
        if (!item) {
            return 'eklemek istediğiniz elemanı girin';
        } else if (this.state.items.indexOf(item) > -1) {
            return 'aynı elemanı ekleyemezsiniz';
        }

        this.setState((prevState) => {
            return { items: prevState.items.concat(item) }
        })
    }

    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            return {
                items: arr
            }
        })
    }

    render() {
        const app = {
            title: "To-do List",
            description: "The list that shows my schedule of today"
        }
        return (
            <div>
                <Header title={app.title} />
                <Desc description={app.description} />
                <ToDoList items={this.state.items} deleteItem={this.deleteItem} clear={this.clear} />
                <Action addItem={this.addItem} />
            </div>
        )
    }
}

ReactDOM.render(<ToDoListFull />, document.querySelector(".root"));