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
*/


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