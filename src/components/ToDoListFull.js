import React from 'react';
import Header from './Header';
import Desc from './Desc';
import Action from './Action';
import ToDoList from './ToDoList';

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
            return 'Please write a text to add it';
        } else if (this.state.items.indexOf(item) > -1) {
            return "You can't add the same text";
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
            <div className='container my-5'>
                <div className="card">
                    <div className="card-header">
                        <Header title={app.title} />
                        <Desc description={app.description} />
                    </div>
                    <div className="card-body">
                        <ToDoList items={this.state.items} deleteItem={this.deleteItem} clear={this.clear} />
                    </div>
                    <div className="card-footer">
                        <Action addItem={this.addItem} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoListFull;