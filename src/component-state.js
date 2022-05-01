class Car extends React.Component {

    constructor(props) {
        super(props);

        this.changeColor = this.changeColor.bind(this);

        this.state = {
            brand: "Opel",
            model: "Astra",
            color: "red",
            year: 2008
        }
    }

    changeColor() {
        //it changes the object's state
        //https://tr.reactjs.org/docs/state-and-lifecycle.html

        this.setState({
            color: "blue",
            model: "Corsa"
        })

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand} {this.state.model}</h1>
                <p>{this.state.color}</p>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

ReactDOM.render(<Car />, document.querySelector(".root"));