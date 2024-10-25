// console.log("hello harsh");

// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// function renderWeatherInfo(data) 
// {
//     let newPara = document.createElement('p');
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
//     document.body.appendChild(newPara);
// }


// async function  fetchWheatherDetails()
// {
//     try{
//         let city = "goa";

//         const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

//         const data = await responce.json();

//         console.log("weather data = ", data);
//         renderWeatherInfo(data);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }

// }

// async function getCustomWheatherDetails()
// {
//     try{
//         let latitude =19.5879845;
//         let longitude = 74.2061816;
//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
//         let data = await result.json();
//         console.log("wheather data ", data);
//         renderWeatherInfo(data);
//     }
//     catch(err)
//     {
//         console.log("Error found : ",err);
//     }
// }

// function getLocation()
// {
//     if(navigator.geolocation)
//     {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else
//     {
//         console.log("No geolocation support\n");
//     }
// }

// function showPosition(position)
// {
//     // let latitude1 = position.coords.latitude;
//     // let longitude1 = position.coords.longitude;
//     let lat = position.coords.latitude;
//     let longi = position.coords.longitude;
    
//     console.log(lat,longi);
// }


const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInforContainer = document.querySelector(".user-info-container");


// initially variable need
let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

currentTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(clickedTab)
{
    if(currentTab != clickedTab)
    {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        
        if(!searchForm.classList.contains('active'))
        {
            userInforContainer.classList.remove('active');
            grantAccessContainer.classList.remove('active');
            searchForm.classList.add('active');
        } 
        else
        {
            searchForm.classList.remove("active");
            userInforContainer.classList.remove('active');
            getfromSessionStorage(); 
        }
    }
}


userTab.addEventListener('click',() => {
    switchTab(userTab);
});

searchTab.addEventListener('click',() => {
    switchTab(searchTab);
});

function getfromSessionStorage()
{
    let localCoordinate = sessionStorage.getItem("user-coordinate");
    if(!localCoordinate)
    {
        grantAccessContainer.classList.add('active');
    }
    else 
    {
        const coordinates = JSON.parse(localCoordinate);
        featchWeatherInfo(coordinates);
    }
}

async function featchWeatherInfo(coordinates)
{
    const {lat , long} = coordinates; 
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");
    try{
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`); 
        const data = await  responce.json();
        loadingScreen.classList.remove("active");
        userInforContainer.classList.add("active");
        renderWeatherInfo(data); 
    }   
    catch{
        loadingScreen.classList.remove('active');
        //hw
    }
}

function renderWeatherInfo(weatherInfo)
{
      // firstly wea have to fetch element
    const cityName = document.querySelector("[data-cityName");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-wheatherDesc]");
    const  weatherIcon = document.querySelector("[wheatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");
     
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${ weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;

}

function getLocation()
{
    loadingScreen.classList.add("active");
    grantAccessContainer.classList.remove("active");
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        console.log("No geolocation support\n");
    }
}

function showPosition(position)
{
    const userCoordinate = {
        lat : position.coords.latitude,
        long : position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinate",JSON.stringify(userCoordinate));
    featchWeatherInfo(userCoordinate); 
} 

const grantAccessbtn = document.querySelector("[data-grantAccess]");
grantAccessbtn.addEventListener('click',getLocation);



const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInforContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
    
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInforContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {

    }
}