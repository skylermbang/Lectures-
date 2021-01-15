const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const targetYear = '14 April 2022';


function countdown(){

    const targetDate = new Date(targetYear);
    const currentDate = new Date();
    const diff = ( targetDate - currentDate) /1000;     // miliseconds / 1000 => seconds 
    const days = Math.floor(diff/ 3600 /24); // second / 3600 /24 
    const hours = Math.floor(diff/3600)%24;
    const mins = Math.floor(diff/60)%60;
    const seconds = Math.floor(diff % 60);
    console.log( days, hours, mins, seconds);


    daysEl.innerHTML =`${days < 10 ? `0${days}` : days}`
    hoursEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}`;
    minsEl.innerHTML= `${mins < 10 ? `0${mins}` : mins}`;
    secondsEl.innerHTML= `${seconds < 10 ? `0${seconds}` : seconds}`;

}; 






function init(){
    setInterval(countdown, 1000);
    countdown();
}




init();