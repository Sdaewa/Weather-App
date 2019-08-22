window.addEventListener("load", ()  => {
    let long;
    let lat; 

    if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api = `https://api.darksky.net/forecast/9f0cd7ea5ab0a3303c9856c5c630924d/${lat},${long}`;
         });
    }else{
         h1.textContent = "Please enable location sharing"
    }
});