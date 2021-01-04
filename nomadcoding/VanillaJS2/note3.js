

/*

In the console 

const Date = new Date()
you can save current date in the constant variable

date.getDay()
date.getHours()
date.getMinutes()

you can get the each time component which stored in the const Date
*it is not real time 





#############################lecture 1 ###############
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1")
function getTime(){

    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours}:${minutes}:${seconds}`
}
function init(){
    getTime();

}
init()


#############################lecture 2 ###############
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1")

function getTime(){

    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ?`0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;

}
function init(){
    getTime();
    setInterval(getTime, 1000)


init()

#############################lecture 3+ 4 ###############
const formcontainer = document.querySelector(".js-form"),
      input= formcontainer .querySelector("input"),
      greeting = document.querySelector(".js-greeting");

/* getting access to the selected object in html */



const USER_LS = "currentUser"; //local storage
    SHOWING_CN= "showing";    // css -> showing 

// handleSubmit even =>  cancelthe default event -> store the name ->
// save the name -> greeting 

function handleSubmit(){
    event.preventDefault();    
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);


}

// save name in the local storage
function saveName(text){
   localStorage.setItem(USER_LS, text);
}

// ask the name  first show the form to ask and get the event handled
function askName(){
    formcontainer.classList.add(SHOWING_CN);
    formcontainer.addEventListener("submit", handleSubmit)
}

// greeting msg with name
function paintGreeting(text){
    formcontainer.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `What's up ${text}!`

}

function loadName(){

    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){

        askName();

    }else {


        paintGreeting(currentUser);

    }




}      

function init(){

    loadName();
}



init();


*/

#############################lecture 5+6 +7###############
const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
// access to the html object


const TODOS_LS = "toDos";  // local storage 
let toDos =[]; // emptry array for the todo list 


function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));// JSON.stringify to make it as string
    // local sotrage can only save string values.
    // js object --> string
}



function paintToDo(text){
    const potato =document.createElement("li"); // create li tag
    const delBtn = document.createElement("button");  // create button
    delBtn.innerHTML=" ❌ ";  // button inside
    delBtn.addEventListener("click",deleteToDo);  // button event if click -> delte todo
    const onion = document.createElement("span"); 
    const newId= toDos.length+1;    // li id 

    onion.innerText =text; // text that you write in the todo 
    potato.appendChild(onion);  
    potato.appendChild(delBtn);
    toDoList.appendChild(potato);
    potato.id =newId;   // give id to li 
    

    const toDoObj = {
        text:text,
        id: newId   
    };   // this object to the toDos array
    toDos.push(toDoObj);  // add the array object
    saveTodos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);  // take string back to object
        console.log(parsedToDos);
        parsedToDos.forEach(function(eachItem){
            paintToDo(eachItem.text);
        })// each task it will shows 
        // eachItem .text or id or both?

    }
}

function handleSubmit(event){

    event.preventDefault();
    const currentValue= toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}


function deleteToDo(event){

    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos= toDos.filter(function (toDo) 
    {
        return toDo.id !== parseInt(li.id);
    });// check if li id is exist of
    toDos = cleanToDos;
    saveTodos();
}


function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}


init()


