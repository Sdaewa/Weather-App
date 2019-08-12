// api key : 82005d27a116c2880c8f0fcb866998a0
displayWeather(){
    
    iconElement.innerHTML = 
    `<img src = "icons/${weather.iconId}.png"/> `;

    tempElement.innerHTML = 
    `${weather.temperature.value} • <span>C</span>`;

    descElement.innerHTML = 
    weather.description;

    locationElement.innerHTML = 
    `${weather.city}, ${weather.country}`;
}