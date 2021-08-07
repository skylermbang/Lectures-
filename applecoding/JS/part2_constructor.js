// constructor

//var student1 = { name: 'kim', age = 15 }


function Student(name, age) {
    this.name = name
    this.age = age

    this.sayHi = function () {
        console.log("hi  i am " + this.name)
    }
}


var newStudent = new Student("bang", 19)
console.log(newStudent)
newStudent.sayHi()