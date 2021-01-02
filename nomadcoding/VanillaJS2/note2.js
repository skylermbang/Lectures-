


/*
  try to get the id "title" from index.html
const title = document.getElementById("title");


title.innerHTML = "whast up skyler?";
const title = document.querySelector("#title");  // id = title
// const title = document.querySelector(".title");  // class = title 
title.style.color = "red";
document.title = "i can change your name";
console.dir(title);


// function 

function sayHello(name, age){
	return `Hello ${name}, and you are fucking ${age} years old`;
    }

const greetSkyler = sayHello ("skyler", 28)
console.log(greetSkyler);


/// ###########2.3#######  

const calculator ={

    plus: function(a, b){
     return   a+b;
    },
    
    minus: function(a,b){
    return  a-b;
    }
}

const plus = calculator.plus (36, 33);
const minus = calculator.minus(30, 60);

console.log(plus);
console.log(minus);


// ###########2.4#######  
/*

const title = document.querySelector("#title");


// event : anything happen in the interneet brower  
// we can intercept this event 



function handleResie(event){
    console.log(" Fuck you why you changin my size ");
    console.log(event);
}

window.addEventListener("resize", handleResie)  // we have to tell them which event we are going to 

// if we use  indow.addEventListener("resize", handleResie())
// then it will just automotically call the function 


function handleClick(){

    
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);




///######################2.5###########################
const title = document.querySelector("#title");


// event : anything happen in the interneet brower  
// we can intercept this event 


/*
function handleResie(event){
    console.log(" Fuck you why you changin my size ");
    console.log(event);
}

window.addEventListener("resize", handleResie)  // we have to tell them which event we are going to 

// if we use  indow.addEventListener("resize", handleResie()) 
// then it will just automotically call the function 


function handleClick(){
    
    
    title.style.color = "blue";
       
    
    
}
title.addEventListener("click", handleClick)


 

 
if ("10"=== "10"){
    console.log(" you are not a cow")
}else if("10" === "11"){
    console.log("you are a cow")
}else{
    console.log(" you are mega cow")
}
*/


// && and = all the condition has to met
/*
if (20 > 5 && "skyler"=== "skyler"){
    console.log("all the condition has met")
}else(
    console.log("no condition met")
)


if (20 > 5 || "skyler"=== "skyler"){
    console.log("one or all the condition has met")
}else(
    console.log("none of the conditoin has met ")
)



// and 
true && true = true;
false && true = false;
true && false = false;
false && false = false ;

// or 
true || true = true;
false || true= true ;
true || false = true;
false || false = false ;



const age = prompt("How old are you?");
console.log(age);

if (age >= 20 && age < 22){

    console.log("you can fucking drink but should not drink");
}else if(age >= 22){
    console.log("go get some drink ")
}else {
 console.log("fuck off")
}   



///######################2.6 // 
const title = document.querySelector("#title");
const BASE_COLOR ="black";
const OTHER_COLOR = "red";




function handleClick(){
    const CURRENT_COLOR=title.style.color;
    console.log(CURRENT_COLOR)

    if (CURRENT_COLOR === BASE_COLOR){
        title.style.color = OTHER_COLOR
    }else{
        title.style.color = BASE_COLOR
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick)

}


 init();


 function handleOffline(){
     console.log(" You are offline")
 }
 
 function handleOnline(){
    console.log(" You are online")
}


window.addEventListener("offline",handleOffline)

window.addEventListener("onine",handleOnline)


function keyPressed(){
    console.log(" dont mess with me")
}

document.addEventListener("keydown",keyPressed)


///######################2.7######################// 


MDN 체크 잘하기 


const title = document.querySelector("#title");

const CLICKED_CLASS = "clickedColor";



function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
/*
function handleClick(){
    

    const hasClass = title.classList.contains(CLICKED_CLASS)

    if (!hasClass ){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}



function init(){

    title.addEventListener("click", handleClick)

}


 init();

/*
 function handleOffline(){
     console.log(" You are offline")
 }
 
 function handleOnline(){
    console.log(" You are online")
}


window.addEventListener("offline",handleOffline)

window.addEventListener("onine",handleOnline)


function keyPressed(){
    console.log(" dont mess with me")
}

document.addEventListener("keydown",keyPressed)
*/  