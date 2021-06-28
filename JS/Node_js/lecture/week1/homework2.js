// week1 homeowork2

function isEven(n) { 
    if (n%2 ===0){
        return true
    }else{
        return false
    }


  }
  function isOdd(n) { 
    if(n%2 != 0){
        return true
    }else{
        return false
    }
  }
  
  console.log(isEven(10)); // true
  console.log(isEven(3)); // false
  console.log(isOdd(5)); // true
  console.log(isOdd(8)); // false