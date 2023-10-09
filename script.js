const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search-box')
const weatherIcon = document.querySelector('.weather-icon');

const apikey = "59d8b0c7c92bdb46f711bb4a16feca9a"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-data").style.display = "none";
    }
    else{
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather-data").style.display = "flex";
    }

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + '° C';
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
