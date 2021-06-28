// promise 

const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("Promise is created!");
  if (isReady) {
    resolve("It's ready");
  } else {
    reject("Not ready");
  }
});

// 2. Consumer
promise
  .then(messsage => {
    console.log(messsage);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });

// Promise is created!
// It's ready
// Done


/* 
status = pending -> resolved -> then 
         pending -> rejected -> catch

*/

/*  producer : when you generate promise,  extue the code in side the promise (excutor)=> depend on the result of the
                excute ( reject or resovled )

    consumer : by the result of the prmoise ,   resolve -> then  reject -> catch 

*/


const isReady = true;
// 1. Producer
const promise = new Promise((resolve, reject) => {
  console.log("Promise is created!");
  if (isReady) {
    resolve("It's ready");
  } else {
    reject("Not ready");
  }
});

// 2. Consumer
promise
	// promise에서 resolve가 될경우
  .then(messsage => {
    console.log(messsage);
  })
	// promise에서 reject가 될경우
  .catch(error => {
    console.error(error);
  })

// Promise is created!
// It's ready
