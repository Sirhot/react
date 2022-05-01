// //Class - ES5
// var Person = function () {
// }

//Class - ES6
class Person {
    constructor(name = "Adam", year = -2000) {
        this.name = name;
        this.year = year;
    }

    findAge() {
        return new Date().getFullYear() - this.year;
    }

    salute(text) {
        return `Hi ${text}, greetings from ${this.name}`;
    }
}

class Student extends Person {
    //super
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super?retiredLocale=tr
    constructor(name, year, studentId) {
        super(name, year);
        this.studentId = studentId;
    }

    //override
    salute(text) {
        return super.salute(text) + ` the student.`
    }
}

class Teacher extends Person {
    constructor(name, year, department) {
        super(name, year);
        this.department = department;
    }

    salute(text) {
        return super.salute(text) + ` the teacher.`
    }
}

//Object
const p = new Person("Axz", 2000);
const p2 = new Person();
const p3 = new Student("Alex", 2003, 312);
const p4 = new Teacher("Cana", 1980, "Physics");

console.log(p.findAge());

console.log(p2.salute("Eve"));

console.log(p3.salute(p4.name));
console.log(p4.salute(p3.name));
