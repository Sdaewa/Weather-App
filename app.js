// api key : 82005d27a116c2880c8f0fcb866998a0
displayWeather(){
    
    iconElement.innerHTML = 
    `<img src = "icons/${weather.iconId}.png"/> `;

    tempElement.innerHTML = 
    `${weather.temperature.value} º <span>C</span>`;

    descElement.innerHTML = 
    weather.description;

    locationElement.innerHTML = 
    `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32; 
}

tempElement.addEventListener("click" function(){
    if (weather.temperature.unit === "celsius") return ;
    if (weather.temperature.unit === "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}º<span>F</span>`;
        weather.temperature.unit = "Fahrenheit";
    }else{
        tempElement.innerHTML =  `${weather.temperature.value}º<span>C</span>`;
        weather.temperature.unit = "celsius";
    }

});
