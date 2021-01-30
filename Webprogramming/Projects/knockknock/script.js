const USERCARD =document.querySelector(".user-card-js");
const USERCARDBTN =document.querySelector(".user-card-button-js");
const PROBLEMLISTBTN = document.querySelector(".problem-list-btn");
const PROBLEMLIST = document.querySelector(".problem-list");
const SOLUTIONLISTBTN = document.querySelector(".solution-list-btn");
const SOLUTIONLIST = document.querySelector(".solution-list");




function openCard1() {


  var image = document.querySelector(".user-card-js");
  console.log( " you clicked");
  console.log(image.src)
  
  if( image.src.math("user.jpeg")){
      USERCARD.src="/gym_gores.jpeg"
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
  PROBLEMLISTBTN.addEventListener("click", openProblemList);
  SOLUTIONLISTBTN.addEventListener("click", openSolutionList);
}



init();