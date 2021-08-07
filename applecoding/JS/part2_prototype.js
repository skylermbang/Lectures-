// prototype 

function Student(name, age) {
    this.name = name
    this.age = age

    this.sayHi = function () {
        console.log("hi  i am " + this.name)
    }
}

Student.prototype.gender = 'male';

var newStudent = new Student("bang", 19)


console.log(newStudent.gender)