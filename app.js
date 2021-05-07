window.addEventListener('load', ()=>{
    let long;
    let lat;
    const APIkey = '1a3b4d0b03c39a9a9874022ceeec08f3';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            let api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })

        })
    } else {

    }
})