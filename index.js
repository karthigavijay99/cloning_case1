let city_input=document.getElementById(`city`)
let city_search=document.getElementById(`search_icon`)

//temperature

let img=document.getElementById(`display image`)
let temp=document.getElementById(`temp`)

//humidity

let hum=document.getElementById(`hum`)
console.log(hum)

let wind= document.getElementById(`wind`)

let description=document.getElementById(`description`)

//writing functionalities

let checkWeather=async(city)=>{
let api="3c0864b56c96fe20ef3dd841d4c42239"
let data=await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
let weather=await data.json()
console.log(weather)

temp.innerHTML=`${Math.round(weather.main.temp)}  <sup>o</sup>C`;
hum.innerHTML=`${Math.round(weather.main.humidity)}%`;
wind.innerHTML=`${Math.round(weather.wind.speed)} Km/s`;
description.innerHTML=weather.weather[0].main


if(weather.weather[0].main=="Rain"){
    img.src='./assets/rain.png'
}
else if(weather.weather[0].main=="Clear"){
    img.src='./assets/clear.png'
}
else if(weather.weather[0].main=="Clouds"){
    img.src='./assets/cloud.png'
}
else if(weather.weather[0].main=="Snow"){
    img.src='./assets/snow.png'
}
else {
    img.src='./assets/sunny image.webp'
}

}
    
city_search.addEventListener('click', () => {
    checkWeather(city_input.value)
    city_input.value = ""
})

