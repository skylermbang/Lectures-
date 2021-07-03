"use strict";

// JS is synchronous
// hositing : var and function declarion go to above excute first

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// Synchronous callback

function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

// Asynchronous callback

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);



//callback hell example

Class UserStorage{
    loginUser(id,password,onSuccess, onError){
        setTimeout(()=> {



        },2000)
    }

    getRoles(user,onSuccess,onError){

    }
}