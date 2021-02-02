const api={
    key: "6d8741ac5272b6dfde0b18e994af9bca",
    base:"https://api.openweathermap.org/data/2.5/",
}

const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
    if(evt.keyCode==13)
    {
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    let now=new Date();
    let date=document.querySelector('.date');

let city=document.querySelector(".city");
city.innerHTML=weather.name;

let tempreture=document.querySelector(".temp");
tempreture.innerHTML=weather.main.temp+"°c";

let weatherDescription=document.querySelector(".weather");
weatherDescription.innerHTML=weather.weather[0].main;

let minMax=document.querySelector(".hi-low");
minMax.innerHTML=weather.main.temp_min+"°c / "+weather.main.temp_max+"°c";

    date.innerText=dateBuilder(now)+" "+now.getFullYear();
}

function dateBuilder (d){
    let months= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[d.getDay()]
    let month=months[d.getMonth()]
    return day+" , "+month;
}
