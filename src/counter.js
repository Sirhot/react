class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            number: 0
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number + 1
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number - 1
            }
        })
    }

    reset() {
        this.setState({ number: 0 })
    }

    render() {
        return (
            //we must use that this. feature bc we are inside of the class
            <div>
                <h1>Number: {this.state.number}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.querySelector(".root"))

// var root = document.querySelector(".root");

// //npx babel src/app.js --out-file=public/scripts/app.js
// //if you declared npm scripts then you can use it like npm run babel(or the that yu attended)
// //if you dont want to write it over and over again, you should add --watch to the end of it


// var number = 0;

// function addOne() {
//     number++
//     renderApp();
// }

// function minusOne() {
//     number--
//     renderApp();
// }

// function renderApp() {
//     //!!this is rendering all codes below there though it is just change number variable. So that makes react different. It is finding changed place and it is rendering only that place. !!
//     var template2 = (
//         <div>
//             <h1>Number: {number}</h1>
//             <button id="plusOne" className="btnRed" onClick={addOne}>+1</button>
//             <button id="minusOne" className="btnBlue" onClick={minusOne}>-1</button>
//         </div>
//     )

//     //as i understood, you can use it just once
//     ReactDOM.render(template2, root)
// }

// function tick() {
//     var element = (
//         <div>
//             <h2>Time: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )

//     ReactDOM.render(element, root)
// }

// setInterval(tick, 1000)//https://www.w3schools.com/jsref/met_win_setinterval.asp

// //renderApp();