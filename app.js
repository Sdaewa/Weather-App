window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection =  document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature span"); 

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/"; //<-- CORS to bypass Localhost and retrieve data from API
            const api = `${proxy}https://api.darksky.net/forecast/9f0cd7ea5ab0a3303c9856c5c630924d/${lat}, ${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data); //  <--getting data from location
                    const {temperature, summary, icon} = data.currently;
                    // Set DOM elements from the API 
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    // set icons
                    setIcons(icon, document.querySelector(".icon"));
                    // Formula celsius/farenheit
                    let celsius = (temperature - 32) * (5 / 9 );
                    // Celsius/Farenheit
                    temperatureSection.addEventListener("click", () => {
                        if (temperatureSpan.textContent === "F"){
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = Math.floor(celsius);
                        }else{
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = temperature;
                        }
                    });

                });
        });
    }
    function setIcons(icon, iconID){
         const skycons = new Skycons({color:"white"});
         const currentIcon = icon.replace(/-/g, "_").toUpperCase(); //<-- regex to change - from API to _
         skycons.play();
         return skycons.set(iconID, Skycons[currentIcon]);
    }
});