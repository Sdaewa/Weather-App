window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
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
                    setIcons(icons, iconID)
                });
        });
    }
    function setIcons(icon, iconID){
         const icons = new icons({color:"white"});
         const currentIcon = icon.replace(/-/g, "_").toUpperCase(); //<-- regex to change - from API to _
         icons.play();
         return icons.set(iconID, Icons[currentIcon]);
    }
});