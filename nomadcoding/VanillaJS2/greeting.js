const formcontainer = document.querySelector(".js-form"),
      input= formcontainer .querySelector("input"),
      greeting = document.querySelector(".js-greeting");




const USER_LS = "currentUser";
    SHOWING_CN= "showing";


function paintGreeting(text){
    formcontainer.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `What's up ${text}!`

}

function loadName(){

    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){



    }else {


        paintGreeting(currentUser);

    }




}      

function init(){

    loadName();
}



init();