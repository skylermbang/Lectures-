// 1-4  JS basic

console.log("hello skyler")
// variable
let name = "skyer"
let age = 20

console.log(name)
console.log(age)

let array = [10,20,30]
console.log(array[0])

let dict ={"name": "skyler", "age": 30,}
console.log(dict)
console.log(dict["name"])

// if
if (dict['age']> 20){
    console.log(" you an old lsoer")
}else{
    console.log(" you shit monkey ! you are not an adult ")
}

//loop 

for (let i =0;i < array.length;i++){
    console.log(array[i])
}

for (let ix of array){
    console.log(ix)
}

// function


let wantedDrink = [ 
    {"name" : "skyler", "age" :24},
    {"name" : "youme", "age" : 19},
    {"name" : "minji", "age" : 26}
]


for (let i = 0; i <wantedDrink.length; i++ ){

    if (isValidAge(wantedDrink[i]['age'])){
        console.log( `${wantedDrink[i]['name']}   can drink `)
    }else{

        console.log( `${wantedDrink[i]['name']}   can't drink `)
    }
}

function isValidAge(age){

    if (age >= 20){
        return true
    }
    else{
        return false
    }    
}