// 1-15 class ,  1-16 
//  class Classname (constructor){body}
// object type

class Laptop {

    constructor(name, price, brand) {
        this.name = name
        this.price = price
        this.brand = brand

    }
}

const laptop1 = new Laptop('Mac', 200000, 'Apple')

console.log(laptop1)
console.log(laptop1.name)
console.log(laptop1.price)
console.log(laptop1.brand)

class Product {

    constructor(name, price) {
        this.name = name
        this.price = price

    }
    printInfo() {
        console.log(`product name : ${this.name}, price:${this.price}`)
    }
}

item1 = new Product('iphone12', 1200000)
item1.printInfo()



/* Object Literal */

const Gtr = {
    name: 'Skyline',
    price: 1000000000,
    printInfo: function () {
        console.log(`name: ${this.name},  the price is ${this.price}$`)
    }
}

Gtr.printInfo()


/* quiz */

class Clothes {
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    clothesInfo() {
        console.log(`the color of the clotehs is ${this.color}, and the size is ${this.size}, and the price is ${this.price}`)
    }
}

const coat = new Clothes('blue', 32, 200000)
const pant = new Clothes('black', 32, 300000)

coat.clothesInfo()