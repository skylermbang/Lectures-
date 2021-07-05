const EventEmitter = require('events')  // core moudle name events   , EventEmitter class

const myEmitter = new EventEmitter();  // instantiate 

const myEmitter2 = new EventEmitter();  // instantiate 
// on methode => callback ;
// when event test , print success
myEmitter.on('test', () => {
    console.log('Success! 1 ') 
})
myEmitter.on('test', () => {
    console.log('Success! 2') 
})
myEmitter2.on('test', () => {
    console.log('Success!3') 
})

myEmitter.emit('test')

myEmitter2.emit('test')
