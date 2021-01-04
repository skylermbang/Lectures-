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
    greeting.innerText = `I LOVE YOU  ❤️ ${text}!`


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