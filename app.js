window.addEventListener('load', ()=>{
    let long;
    let lat;
    const APIkey = '1a3b4d0b03c39a9a9874022ceeec08f3';
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDescription = document.querySelector(".temperature-description");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;

            fetch(api)
                .then((response) => {
                    console.log(response.ok)
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    //set DOM elements from the api
                    temperatureDegree.textContent = Math.round(data.main.temp - 273.15);
                    locationTimezone.textContent = `UTC +${data.timezone/3600}`;
                    temperatureDescription.textContent = data.weather[0].description;
                    //set icon according to data from the API 
                    setIcon(data.weather[0].icon, data.weather[0].main)

                })

        })
    } else {
        console.log("allow to geolocate");
    }
    function setIcon(iconNumber, mainDescription) {
        let img = document.getElementById('iconImg');
        img.alt = mainDescription;
        img.src = `http://openweathermap.org/img/wn/${iconNumber}@2x.png`;
        
    }
})