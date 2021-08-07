// inheritance using  ES5 


let parent = { lastName: "Bang", age: 40 };
let child = Object.create(parent);
let grandchild = Object.create(child);

child.age = 20;
grandchild = 2;