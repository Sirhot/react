var root = document.querySelector(".root");

//npx babel src/app.js --out-file=public/scripts/app.js
//if you declared npm scripts then you can use it like npm run babel(or the that yu attended)
//if you dont want to write it over and over again, you should add --watch to the end of it
//"babel": "npx babel src/app.js --out-file=public/scripts/app.js --watch" 

//onSubmit
//https://hakirac.medium.com/react-ile-form-i%C5%9Fleri-nas%C4%B1l-yap%C4%B1l%C4%B1r-ca8b4ca3445a
//https://tr.reactjs.org/docs/handling-events.html

const app = {
    title: "To-do List",
    description: "The list that shows my schedule of today",
    items: []
}

const onFormSubmit = (event) => {
    //https://yasinefemdalkilic.medium.com/javascript-stoppropagation-ve-prevent-default-kullan%C4%B1m%C4%B1-ve-fark%C4%B1-6a6cb11e570e#:~:text=Preventdefault%20kavram%C4%B1%20ilgili%20elementin%20taray%C4%B1c%C4%B1,davran%C4%B1%C5%9F%C4%B1%20engellemek%20i%C3%A7in%20preventdefault%20kullan%C4%B1r%C4%B1z.
    //preventing submit data which comes by form    
    event.preventDefault();

    var item = event.target.elements.text.value

    if (item) {
        app.items.push(item)
        event.target.elements.text.value = ""
        render()
    }

    console.log("Form submitted");

}

const clear = () => {
    app.items = []
    render()

}

const render = () => {

    var template = (
        <div style={{ backgroundColor: "lightblue" }}>
            <h1>{app.title}</h1>
            <h2>{app.description}</h2>
            {
                <ul>
                    {
                        app.items.map((item) => {
                            return <li>{item}</li>
                        }
                        )
                    }</ul>

            }
            <p><button onClick={clear}>Clear ALL</button></p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="text" />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )

    ReactDOM.render(template, root)

}

render()