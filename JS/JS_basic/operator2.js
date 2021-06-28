// 1-6 Operator2 
/*
1. Comparison operators
2. Logical operators
3. Equality operators 
*/

/* 1. comparison operators */

console.log(1 < 2)
console.log(1 <= 2)
console.log(1 > 2)
console.log(1 >= 2)


/* Logical operators */
// || , && , !

console.log("########")
let isOnSale = true
let isDiscount = true

console.log(isOnSale && isDiscount)  // true && true = ture
console.log(isOnSale || isDiscount)  // ture || ture = ture

isOnSale = false
console.log(isOnSale && isDiscount)  // false && true = false
console.log(isOnSale || isDiscount)  // false || ture = true

isDiscount = false
console.log(isOnSale && isDiscount)  // false && false = false
console.log(isOnSale || isDiscount)  // false || false = false

console.log(!isDiscount)


/* Equality */
//  === vs == 

console.log("########")

console.log(1 === 1) //t
console.log(1 === 2) //f
console.log('skyler' === 'skyler') //t
console.log('skyler' === 'Skyler') //f 
console.log('1' == 1) //t
console.log('1' === 1) //f

console.log("########")


let item = 100
let item2 = 200
let total_price = item + item2
let dis = total_price - (total_price * 0.2)
let dis2 = total_price * 0.8

console.log(` you purchasing all the item with 20% discount , the totla is ${dis}`)
console.log(` you purchasing all the item with 20% discount , the totla is ${dis2}`)