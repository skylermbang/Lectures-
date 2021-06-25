// async await ;  you can use promise more easy
// very intuitive. 

// add async -> return return promise 
// await ->  promise : you can just skipp til then - but await can stop til promise finisehd.


// without async -> prmise will skipp and do the next line 

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000)
    });
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  
    console.log(result); // "완료!"
  }
  
  f();