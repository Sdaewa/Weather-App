window.addEventListener("load", ()  => {
    let long;
    let lat; 

    if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           constapi = "https://api.darksky.net/forecast/9f0cd7ea5ab0a3303c9856c5c630924d/37.8267,-122.4233"
         });
    }else{
         h1.textContent = "Please enable location sharing"
    }
});