const user = {
    name: "serhat",
    email: "qwerty@info.com",
    city: "Kocaeli",
    roles: ["admin", "customer"],
    // getRoles: function () {

    //     const that = this//we assign this.name to that, in this way we could use it in another scope or function
    //     this.roles.forEach(function (role) {//es5 function produces a new scope therefore we cant reach name directly inside of function
    //         console.log(role)
    //         console.log(that.name);
    //     })
    // }
    getRoles: function () {
        this.roles.forEach((role) => {//es6- there isnt a new scope. we can use this.
            console.log(role)
            console.log(this.name);
        })
    }
}

user.getRoles()

const addES5 = function () {
    let total = 0
    //arguments.forEach- i tried it but it didnt work. what is the problem boiii? error= arguments.forEach is not a function
    //solution= https://stackoverflow.com/questions/44434622/js-arguments-foreach-is-not-a-function
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

//there is no any new scope thats why arguments doesnt work
const addES6 = () => {
    console.log(arguments);
}

console.log(addES5(5, 10, 15, 20));
addES6(5, 10, 15, 20);