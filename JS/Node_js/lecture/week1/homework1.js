// week 1 homework

var personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];

//  for loop
for (let i=0; i<personArray.length; i++){
    console.log(`His/Her name is ${personArray[i]['name']}. He/She is ${personArray[i]['age']} years old.`)
}

// for of
for(let j of personArray){
    console.log(`His/Her name is ${j['name']}. He/She is ${j['age']} years old.`)
}

// for in
for(let k in personArray){
    console.log(`His/Her name is ${personArray[k]['name']}. He/She is ${personArray[k]['age']} years old.`)
}

// forEach

personArray.forEach(person => {
    //console.log(person)
    console.log(`His/Her name is ${person['name']}. He/She is ${person['age']} years old.`)
})