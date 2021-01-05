const body = document.querySelector("body");


const IMG_NUMBER = 13;


/*
function handleImgLoad(){
    console.log("finished load"); 
}
*/

function paintImg(imgNumber){
    const image = new Image();
    image.src =`img/${imgNumber}.jpg`;
    body.appendChild(image);
   // image.addEventListener("loadend" , handleImgLoad)  we dont need this cuz 
   // we are not downloading any img via API 


   image.classList("bgImage");
    

}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init(){
    const randomeNumber  =  genRandom();
    paintImg(randomeNumber);

}


init();