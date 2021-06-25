// ES6 new rules & change 
/* 
    var : the variable still can be access after the for loop -> big problem 
    let :  new conecpt of Scope.   
    const : you cant change the variable value 
    
    hoisting :  you can bring the variable/functoin from the bottom => this result in var can be too complicated.

*/

/*
    for of , for in , forEach

    for(let i of array){}  // you can take the elemenet of array  

    for(let index in array){} // you can take the index of array

    array.forEach((potato)=>{
        console.log(potato)
    })  // 

*/

/*
    arroy function :
    => 
*/

function hello() {
	console.log("Hello function");
}

// 첫번째 arrow function
const arrowFunction = () => {
	console.log("Hello arrow function");
}


// function hello(){...}
// hello() => {...}

// 두번째 arrow function
const arrowFunctionWithoutReturn = () => console.log("Hello arrow function without return");   // without {} because its single line

hello(); // Hello function
arrowFunction(); // Hello arrow function
arrowFunctionWithoutReturn(); // Hello arrow function without return

    
let personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
    {"name": "Fred Doe", "age": 32},
    {"name": "Chris Doe", "age": 45},
    {"name": "Layla Doe", "age": 37},
];

// personArray의 나이 평균을 구해주는 Arrow Function을 작성해봅시다.
const getAgeAverage = (personArray) => {
    let avg =0
    let sum =0

    for(let i in personArray){
        sum+=personArray[i]['age']
        
    }

    avg =sum/personArray.length
    return avg
}

const hi =(name) => {
    console.log(` hi , ${name}`)
}

hi("youme")

console.log(getAgeAverage(personArray));


/* 
    synchronous  vs asychronous 

    synchronous :  in order 
    asychronous :  not in order -> not wariting ->

    callback : 

    Promises :   use promise to make it easier to process the asycnronous procedure? call back problem

        ~~~ then ~~ then ~~~ >  easy to read 



*/