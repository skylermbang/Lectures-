const USERCARD =document.querySelector(".user-card-js");
const USERCARDBTN =document.querySelector(".user-card-button-js");
const USERCARDBTN2 =document.querySelector(".user-card-button-js2");
const USEREXPLAIN = document.querySelector(".user-explain");

const FEATURECARD =document.querySelector(".feature-card-js");
const FEATURECARDBTN =document.querySelector(".feature-card-button-js");
const FEATURECARDBTN2 =document.querySelector(".feature-card-button-js2");
const FEATUREEXPLAIN = document.querySelector(".feature-explain");
const FEATURE2CARD =document.querySelector(".feature2-card-js");
const FEATURE2CARDBTN =document.querySelector(".feature2-card-button-js");
const FEATURE2CARDBTN2 =document.querySelector(".feature2-card-button-js2");
const FEATURE2EXPLAIN = document.querySelector(".feature2-explain");

const BOOSTERCARD =document.querySelector(".booster-card-js");
const BOOSTERCARDBTN =document.querySelector(".booster-card-button-js");
const BOOSTERCARDBTN2 =document.querySelector(".booster-card-button-js2");
const BOOSTEREXPLAIN = document.querySelector(".booster-explain");

const PROBLEMLISTBTN = document.querySelector(".problem-list-btn");
const PROBLEMLIST = document.querySelector(".problem-list");
const SOLUTIONLISTBTN = document.querySelector(".solution-list-btn");
const SOLUTIONLIST = document.querySelector(".solution-list");




const PROBLEMFORM = document.querySelector(".js-problem-form");
const PROBLEMINPUT = PROBLEMFORM.querySelector("input");
const PROBLEMLIST2 = document.querySelector(".js-problem-list");











var imgCheck1 = true;
var imgCheck2 = true;

var imgCheck3 = true;
var imgCheck4 = true;

var imgCheck5 = true;
var imgCheck6 = true;

var imgCheck7 = true;
var imgCheck8 = true;







const PROBLEM_LS = "PROBLEMS";
const PROBLEM_LIST_ARRAY = [];

function loadProblem(){

  const Problems = localStorage.getItem(PROBLEM_LS);



  if(  Problems !== null){
    const parsedProblem = JSON.parse(Problems);
    parsedProblem.forEach(function(showproblems){
      paintProblem(PROBLEM_LIST_ARRAY.text);
    });


  } 
}

function saveList(){
  localStorage.setItem(PROBLEM_LS, JSON.stringify(PROBLEM_LIST_ARRAY));
}


function paintProblem(text){
  console.log(text);
  const li = document.createElement("li");
  const button = document.createElement("button");
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

function handleSubmit(){
  event.preventDefault();
  const currentValue= PROBLEMINPUT.value;
  paintProblem(currentValue);
  PROBLEMINPUT.value="";

}










function openCard2() {


  if( imgCheck2 === true ){
  USERCARD.style.display="block";
  USERCARD.src="/gym_gores.jpeg";
  imgCheck2 =false;
  USERCARD.style.marginLeft = "80px";

  USERCARDBTN2.innerHTML="YOUR CARD IS : ";

  };

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

  }
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


function openCard8() {
  if( imgCheck8 === true ){
  console.log("testing");
  BOOSTERCARD.style.display="block";
  BOOSTERCARD.src="/technology.jpeg";
  imgCheck8 =false;
  BOOSTERCARD.style.marginLeft = "80px";
  BOOSTERCARDBTN.innerHTML="YOUR CARD IS :";
  }  
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


  loadProblem();
  PROBLEMFORM.addEventListener("submit", handleSubmit);



}



init();