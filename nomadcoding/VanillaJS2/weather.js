const weatehr = document.querySelector(".js-weather");



const COORDS ='coords';
const API_KEY = "dc011e1ff1445e517f4e48628aebac04"; // api key for the weather 



function getWeather(lat, lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(response){   //network response
    return(response.json())})   // you get the JSON response
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place=json.name;
        weatehr.innerText = `${temperature} C in outside (@${place})`
    });
}
//then => after one action you do next action

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucess(position){
    console.log(position);
    const latitude =position.coords.latitude;
    const longitude =position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };// latitude =latitude => latitude,
    saveCoords(coordsObj);
    getWeather(latitude, longitude);

}

function handleGeoError(position){
    console.log("can not access your location!");
}



function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
    // api  navigator

}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
     const parseCoords = JSON.parse(loadedCoords);   
     console.log(parseCoords);
     getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}



function init(){

    loadCoords();

}

init();