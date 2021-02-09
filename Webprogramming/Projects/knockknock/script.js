const USERCARD =document.querySelector(".user-card-js");
const USERCARDBTN =document.querySelector(".user-card-button-js");
const USERCARDBTN2 =document.querySelector(".user-card-button-js2");
const USERCARDBTN3 =document.querySelector(".user-card-button-js3");
const USEREXPLAIN = document.querySelector(".user-explain");
const USEREXPLAIN2 = document.querySelector(".user-explain2");

const FEATURECARD =document.querySelector(".feature-card-js");
const FEATURECARDBTN =document.querySelector(".feature-card-button-js");
const FEATURECARDBTN2 =document.querySelector(".feature-card-button-js2");
const FEATURECARDBTN3 =document.querySelector(".feature-card-button-js3");
const FEATUREEXPLAIN = document.querySelector(".feature-explain");
const FEATUREEXPLAIN2 = document.querySelector(".feature-explain2");

const FEATURE2CARD =document.querySelector(".feature2-card-js");
const FEATURE2CARDBTN =document.querySelector(".feature2-card-button-js");
const FEATURE2CARDBTN2 =document.querySelector(".feature2-card-button-js2");
const FEATURE2CARDBTN3 =document.querySelector(".feature2-card-button-js3");
const FEATURE2EXPLAIN = document.querySelector(".feature2-explain");
const FEATURE2EXPLAIN2 = document.querySelector(".feature2-explain2");

const BOOSTERCARD =document.querySelector(".booster-card-js");
const BOOSTERCARDBTN =document.querySelector(".booster-card-button-js");
const BOOSTERCARDBTN2 =document.querySelector(".booster-card-button-js2");
const BOOSTERCARDBTN3 =document.querySelector(".booster-card-button-js3");
const BOOSTEREXPLAIN = document.querySelector(".booster-explain");
const BOOSTEREXPLAIN2 = document.querySelector(".booster-explain2");




const PROBLEMLISTBTN = document.querySelector(".problem-list-btn");
const PROBLEMLIST = document.querySelector(".problem-list");
const SOLUTIONLISTBTN = document.querySelector(".solution-list-btn");
const SOLUTIONLIST = document.querySelector(".solution-list");




const PROBLEMFORM = document.querySelector(".js-problem-form");
const PROBLEMINPUT = PROBLEMFORM.querySelector("input");
const PROBLEMLIST2 = document.querySelector(".js-problem-list");



const SOLUTIONMFORM = document.querySelector(".js-solution-form");
const SOLUTIONINPUT = SOLUTIONMFORM.querySelector("input");
const SOLUTIONLIST2 = document.querySelector(".js-solution-list");






const WHATBTN = document.querySelector(".what-btn");
const WHATCONTENT = document.querySelector(".what-content");
const WHATCONTAINER = document.querySelector(".what-container");
const WHATBTN2 = document.querySelector(".what-content-btn");



const WHYBTN = document.querySelector(".why-btn");
const WHYCONTENT = document.querySelector(".why-content");
const WHYCONTAINER = document.querySelector(".why-container");
const WHYBTN2 = document.querySelector(".why-content-btn");





const HOWBTN = document.querySelector(".how-btn");
const HOWCONTENT = document.querySelector(".how-content");
const HOWCONTAINER = document.querySelector(".how-container");
const HOWBTN2 = document.querySelector(".how-content-btn");




var imgCheck1 = true;
var imgCheck2 = true;

var imgCheck3 = true;
var imgCheck4 = true;

var imgCheck5 = true;
var imgCheck6 = true;

var imgCheck7 = true;
var imgCheck8 = true;


const PROBLEM_LS = "PROBLEMS";
let PROBLEM_LIST_ARRAY = [];




const SOLUTION_LS = "SOLUTIONS";
let SOLUTION_LIST_ARRAY = [];

var whatCheck = true;
var whyCheck = true;
var howCheck = true;



function showHowContent(){
  HOWCONTAINER.style.display= "block";
  HOWTBTN2.style.display="none";
}

function showHow(){

  if(howCheck === true){
  HOWCONTENT.style.display="block";
  howheck =false;
  console.log(howCheck);
  HOWBTN.innerHTML = "close";
  HOWBTN2.style.display= "block";
  HOWBTN2.addEventListener("click", showHowContent);


  }else if (howCheck === false){
    HOWCONTENT.style.display="none";
    HowCheck=true;
    HOWBTN.innerHTML = "open";
  }
}


function showWhatContent(){
  WHATCONTAINER.style.display= "block";
  WHATBTN2.style.display="none";
}

function showWhat(){

  if(whatCheck === true){
  WHATCONTENT.style.display="block";
  whatCheck =false;
  console.log(whatCheck);
  WHATBTN.innerHTML = "close";
  WHATBTN2.style.display= "block";
  WHATBTN2.addEventListener("click", showWhatContent);


  }else if (whatCheck === false){
    WHATCONTENT.style.display="none";
    whatCheck=true;
    WHATBTN.innerHTML = "open";
  }
}


function showWhatContent(){
  WHATCONTAINER.style.display= "block";
  WHATBTN2.style.display="none";
}

function showWhyContent(){
  WHYCONTAINER.style.display= "block";
  WHYBTN2.style.display="none";
}

function showWhy(){

  if(whyCheck === true){
  WHYCONTENT.style.display="block";
  whyCheck =false;
  console.log(whyCheck);
  WHYBTN.innerHTML = "close";
  WHYBTN2.style.display= "block";
  WHYBTN2.addEventListener("click", showWhyContent);


  }else if (whyCheck === false){
    WHYCONTENT.style.display="none";
    whyCheck=true;
    WHYBTN.innerHTML = "open";
  }
}


function delProblemList(event){
 console.log(event.target.parentNode);
 
  const btn1 = event.target;
  const li = btn1.parentNode;
  
  PROBLEMLIST2.removeChild(li);

  const cleanProblemList = PROBLEM_LIST_ARRAY.filter(function(list) {
    return list.id !== parseInt(li.id);
  });


  
  PROBLEM_LIST_ARRAY = cleanProblemList;
  saveList();


}

function delSolutionList(event){
  console.log(event.target.parentNode);
  
   const btn1 = event.target;
   const li = btn1.parentNode;
   
   SOLUTIONLIST2.removeChild(li);
 
   const cleanSolutionList = SOLUTION_LIST_ARRAY.filter(function(list) {
     return list.id !== parseInt(li.id);
   });
 
 
   
   SOLUTION_LIST_ARRAY = cleanSolutionList;
   saveList2();
 
 
 }
function loadProblem(){

  const Problems = localStorage.getItem(SOLUTION_LS);
  if(  Problems !== null){
    const parsedProblem = JSON.parse(Problems);
    parsedProblem.forEach(function(showproblems){
      paintProblem(showproblems.text);
    });


  } 
}

function loadSolution(){

  const Solutions = localStorage.getItem(SOLUTION_LS);
  if(  Solutions !== null){
    const parsedSolutions = JSON.parse(Solutions);
    parsedSolutions.forEach(function(showpSolutions){
      paintSolutions(showpSolutions.text);
    });


  } 
}

function saveList(){
  localStorage.setItem(PROBLEM_LS, JSON.stringify(PROBLEM_LIST_ARRAY));
}

function saveList2(){
  localStorage.setItem(SOLUTION_LS, JSON.stringify(SOLUTION_LIST_ARRAY));
}

function paintProblem(text){
  console.log(text);
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.addEventListener("click",delProblemList);
  const newId = PROBLEM_LIST_ARRAY.length + 1;
  button.innerHTML = " X ";
  const span = document.createElement("span");
  span.innerText= text;
  li.appendChild(span);
  li.appendChild(button);
  li.id = newId;
  PROBLEMLIST2.appendChild(li);
  const ProblemObject = {

    text : text,
    id : newId
    

  };
  PROBLEM_LIST_ARRAY.push(ProblemObject);
  saveList();

}

function paintSolutions(text){
    console.log(text);
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener("click",delSolutionList);
    const newId = SOLUTION_LIST_ARRAY.length + 1;
    button.innerHTML = " X ";
    const span = document.createElement("span");
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(button);
    li.id = newId;
    SOLUTIONLIST2.appendChild(li);
    const SolutionObject = {
  
      text : text,
      id : newId
      
  
    };

  SOLUTION_LIST_ARRAY.push(SolutionObject);
  saveList2();




}

function handleSubmit(){
  event.preventDefault();
  const currentValue= PROBLEMINPUT.value;
  paintProblem(currentValue);
  PROBLEMINPUT.value="";

}

function handleSubmit2(){
  event.preventDefault();
  const currentValue= SOLUTIONINPUT.value;
  paintSolutions(currentValue);
  SOLUTIONINPUT.value="";

}




function genRandom1(){
  const USER_CARD_NUMBER = 9 ;
  const number1 = Math.floor(Math.random() * USER_CARD_NUMBER );
  return number1;
 
}


function genRandom2(){
  const FEATURE1_CARD_NUMBER = 4 ;
  const number2 = Math.floor(Math.random() * FEATURE_CARD_NUMBER );
  return number2;
 
}


function genRandom3(){
  const FEATURE2_CARD_NUMBER = 4 ;
  const number3 = Math.floor(Math.random() * FEATURE2_CARD_NUMBER );
  return number3;
 
}


function genRandom4(){
  const BOOSTER_CARD_NUMBER = 9 ;
  const number4 = Math.floor(Math.random() * BOOSTER_CARD_NUMBER );
  return number4;
 
}







var number1 = "";
var number2 = "";
var number3 = "";
var number4 = "";



function openCard2() {

  const randomeNumber1 = genRandom1();
  //const randomeNumber1 = 1;
  if( imgCheck2 === true ){
  USERCARD.style.display="block";
  USERCARD.src=`/user${randomeNumber1}.jpeg`;
  imgCheck2 =false;
  USERCARD.style.marginLeft = "80px";

  USERCARDBTN2.innerHTML="YOUR CARD IS : ";
  USERCARDBTN3.style.display="block";
  USERCARDBTN3.addEventListener("click", openCardExplain);
  number1 = randomeNumber1;
  console.log(number1);



  
  };

  function openCardExplain(randomeNumber1){
    USEREXPLAIN2.style.display="block";
    console.log(number1);
    var user0_explain = " local community";
    var user1_explain = "Many come from far away to make it , here and then there are true native, here for a lifetime, This concenturation& mix makes the big city great!";
    var user2_explain = " freelancer";
    var user3_explain = " college students";
    var user4_explain = " families";
    var user5_explain = " married couple";
    var user6_explain = " mass market";
    var user7_explain = " children";
    var user8_explain = " start ups";
    var user9_explain = " senior citizens";
    

    if(number1 === 0){

      USEREXPLAIN2.innerHTML= user0_explain;
    }else if (number1 === 1){
      USEREXPLAIN2.innerHTML= user1_explain;
    }else if (number1 === 2){
      USEREXPLAIN2.innerHTML= user2_explain;
    }else if (number1 === 3){
      USEREXPLAIN2.innerHTML= user3_explain;
    }else if (number1 === 4){
      USEREXPLAIN2.innerHTML= user4_explain;
    }else if (number1 === 5){
      USEREXPLAIN2.innerHTML= user5_explain;
    }else if (number1 === 6){
      USEREXPLAIN2.innerHTML= user6_explain;
    }else if (number1 === 7){
      USEREXPLAIN2.innerHTML= user7_explain;
    }else if (number1 === 8){
      USEREXPLAIN2.innerHTML= user8_explain;
    }else if (number1 === 9){
      USEREXPLAIN2.innerHTML= user9_explain;
    }
  }
}



function openCard1(){


  if(imgCheck1 === true){
  USEREXPLAIN.style.display="block";
  USERCARD.style.display="none";
  imgCheck1 = false;


  USERCARDBTN2.style.display = "block";
  console.log( `imgcheck 1 is ${imgCheck1}`);
  console.log( `imgcheck 2 is ${imgCheck2}`);
  USERCARDBTN.style.display = "none";

  }
}


function openCard4() {



  if( imgCheck4 === true ){
  console.log("testing");
  FEATURECARD.style.display="block";
  FEATURECARD.src="/technology.jpeg";
  imgCheck4 =false;
  FEATURECARD.style.marginLeft = "80px";
  FEATURECARDBTN2.innerHTML="YOUR CARD IS : ";

  };

}

function openCard3(){


  if(imgCheck3 === true){
  FEATUREEXPLAIN.style.display="block";
  FEATURECARD.style.display="none";
  imgCheck3 = false;
  FEATURECARDBTN2.style.display = "block";
  FEATURECARDBTN.style.display = "none";

  };
}

function openCard6() {



  if( imgCheck6 === true ){
  console.log("testing");
  FEATURE2CARD.style.display="block";
  FEATURE2CARD.src="/technology.jpeg";
  imgCheck6 =false;
  FEATURE2CARD.style.marginLeft = "80px";
  FEATURE2CARDBTN.innerHTML="YOUR CARD IS : ";

  };

}

function openCard5(){


  if(imgCheck5 === true){
  FEATURE2EXPLAIN.style.display="block";
  FEATURE2CARD.style.display="none";
  imgCheck5 = false;
  FEATURE2CARDBTN2.style.display = "block";
  FEATURE2CARDBTN.style.display = "none";

  }
}

/* Booster Card  */
function openCard8() {
  if( imgCheck8 === true ){

  const randomeNumber4 = genRandom4();

  BOOSTERCARD.style.display="block";
  BOOSTERCARD.src=`/booster${randomeNumber4}.png`;
  imgCheck8 =false;
  BOOSTERCARD.style.marginLeft = "80px";
  BOOSTERCARDBTN.innerHTML="YOUR CARD IS :";

  BOOSTERCARDBTN3.style.display="block";
  BOOSTERCARDBTN3.addEventListener("click", openCardExplain4);
  number4 = randomeNumber4;
  console.log(number4);
  }  
}


function openCardExplain4(randomeNumber4){
 
  console.log(number4);

  var booster0_explain = " Mentorship";
  var booster1_explain = "Efficiency";
  var booster2_explain = " Headlines";
  var booster3_explain = " Piggyback";
  var booster4_explain = " Cheap labor";
  var booster5_explain = " good will";
  var booster6_explain = " speed";
  var booster7_explain = " passionate team";
  var booster8_explain = " exclusive IP";
  var booster9_explain = " consistency";
  

  if(number4 === 0){

    BOOSTEREXPLAIN2.innerHTML= booster0_explain;
  }else if (number4 === 1){
    BOOSTEREXPLAIN2.innerHTML= booster1_explain;
  }else if (number4 === 2){
    BOOSTEREXPLAIN2.innerHTML= booster2_explain;
  }else if (number4 === 3){
    BOOSTEREXPLAIN2.innerHTML= booster3_explain;
  }else if (number4 === 4){
    BOOSTEREXPLAIN2.innerHTML= booster4_explain;
  }else if (number4 === 5){
    BOOSTEREXPLAIN2.innerHTML= booster5_explain;
  }else if (number4 === 6){
    BOOSTEREXPLAIN2.innerHTML= booster6_explain;
  }else if (number4 === 7){
    BOOSTEREXPLAIN2.innerHTML= booster7_explain;
  }else if (number4 === 8){
    BOOSTEREXPLAIN2.innerHTML= booster8_explain;
  }else if (number4 === 9){
    UBOOSTEREXPLAIN2.innerHTML= booster9_explain;
  }
  BOOSTEREXPLAIN2.style.display="block";
}


function openCard7(){
  if(imgCheck7 === true){
  BOOSTEREXPLAIN.style.display="block";
  BOOSTERCARD.style.display="none";
  imgCheck7 = false;
  BOOSTERCARDBTN2.style.display = "block";
  BOOSTERCARDBTN.style.display = "none";

  }
}





function openProblemList(){
    console.log("whats up?")
    PROBLEMLIST.style.display ="block";
    console.log(PROBLEMLIST.style.display );


}

function openSolutionList(){
    console.log("solution list?");
    SOLUTIONLIST.style.display="block";


}


function saveWhat() {
  var x = document.getElementById("what").value;
  document.getElementById("demo").innerHTML = x;
}




function saveWhy() {
  var y = document.getElementById("why").value;
  document.getElementById("demo2").innerHTML = y;
}



function saveHow() {
  var z = document.getElementById("how").value;
  document.getElementById("demo3").innerHTML = z;
}



function init(){

  USERCARDBTN.addEventListener("click" , openCard1);
  USERCARDBTN2.addEventListener("click", openCard2);

  FEATURECARDBTN.addEventListener("click" , openCard3);
  FEATURECARDBTN2.addEventListener("click", openCard4);
  FEATURE2CARDBTN.addEventListener("click" , openCard5);
  FEATURE2CARDBTN2.addEventListener("click", openCard6);
  BOOSTERCARDBTN.addEventListener("click" , openCard7);
  BOOSTERCARDBTN2.addEventListener("click", openCard8);
  PROBLEMLISTBTN.addEventListener("click", openProblemList);
  SOLUTIONLISTBTN.addEventListener("click", openSolutionList);

  

  PROBLEMFORM.addEventListener("submit", handleSubmit);
  loadProblem();



  SOLUTIONMFORM.addEventListener("submit", handleSubmit2);
  loadSolution();

  WHATBTN.addEventListener("click", showWhat);
  WHYBTN.addEventListener("click", showWhy);
  HOWBTN.addEventListener("click", showHow);
}



init();