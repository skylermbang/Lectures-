const fs = require('fs')

/*
console.log('Start')

let content = fs.readFileSync('./new', 'utf8')  // encoding utf8
console.log(content)


console.log('finish')*/


console.log('Start')

fs.readFile('./new','utf8', (error, data)=> {
    console.log(data)
})
console.log('finish')

