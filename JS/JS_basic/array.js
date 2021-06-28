/// 1-17 ,1-18 array

const array1 = new Array(1, 2, 3, 4, 5, 6)  // utiliziting array class (from js )

const array2 = [1, 2, 3, 4, 5]

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple']



console.log(rainbow.length)
console.log(rainbow[rainbow.length - 1])

// push , pop

rainbow.push("indigo")  // append at the last 
console.log(rainbow)

rainbow.pop("blue")
console.log(rainbow)


rainbow.pop(rainbow[0])  // pop  dosent matter what comes in just delete the last one
console.log(rainbow)


// for  loop

for (const color of rainbow) {
    console.log(color)
}


for (let i = 0; i < rainbow.length; i++) {
    console.log(rainbow[i])
}

/*quiz */

const price = [10, 20, 30, 40, 50, 30, 40, 20, 90, 10]
let sum = 0

for (const pa of price) {
    sum += pa
}

const avg = sum / price.length
console.log(`the total is ${sum}, and the avg price is ${avg}`)