// inheritance using ES6

class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getAngry = function () { console.log("you twat ") }
    }
    sayHid() {
        console.log("hi")
    }
}

var child = new Parent()

child.__proto__
parent.prototype