//  1-5 Operatoin
/*
1. Numeric operators
2. Increment and decrement operator
3. assignment operators
*/


console.log("My" + "  car")

console.log(1 + '2') // we can add str + int = str

console.log(1 + 2) // int shown in different color 


// template literals
const shoesPrice = 200000
console.log("this shoes is " + shoesPrice + " dollar")
console.log(`this shoes is ${shoesPrice} dollar `)



/* Numeric operator  */

console.log("#####   numeric operator #####")
console.log(2 + 1)
console.log(2 - 1)
console.log(2 * 1)
console.log(21 / 3)
console.log(7 % 2)
console.log(2 ** 2)



/* Increasement & decresement operator  */

console.log("#####   Increasement & decresement operator #####")

let count = 1
const preIncrement = ++count

console.log(`count : ${count}, preIncrement : ${preIncrement}`)


console.log("##### ?? #####")

let count2 = 1
const postIncrement2 = count++

console.log(`count : ${count2}, postIncrement : ${postIncrement2}`)



/* Assignment operators   */

console.log("#####   Assignment operators  #####")
const shirts = 10000
const pants = 40000
let totalPrice = 0

totalPrice += shirts
console.log(totalPrice)

totalPrice += pants
console.log(totalPrice)

totalPrice -= shirts
console.log(totalPrice)