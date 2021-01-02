

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

*/