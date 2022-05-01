//JSX-Javascript XML
var root = document.querySelector(".root");

//npx babel src/app.js --out-file=public/scripts/app.js
//if you declared npm scripts then you can use it like npm run babel(or the that yu attended)
//if you dont want to write it over and over again, you should add --watch to the end of it

var template = (
    <div>
        <h1 id="header">Hello World</h1>
        <div>Lorem, ipsum dolor.</div>
        <h2>Lorem, ipsum.</h2>
    </div>
)

//React
// var template = React.createElement(
//         "h1",
//         null,
//         "Hello World"
//     )
//     //ReactDOM

//as i understood, you can use it just once
ReactDOM.render(template, root);