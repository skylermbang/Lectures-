const EventEmitter = require('events')  // core moudle name events   , EventEmitter class

const myEmitter = new EventEmitter();  // instantiate 

const object ={name: "skyler",  age : 20,  sex: 'male'}

myEmitter.on('test', (info) => {
    console.log(info) 
})


myEmitter.emit('test' , object)
