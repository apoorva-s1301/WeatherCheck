function displayWeather(weatherData)
{

    document.querySelector("input").value = '';
    document.querySelector(".city-name").innerText = "Weather in "+ weatherData.name;
    document.querySelector(".weather-icon").src = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
    document.querySelector(".temp").innerText = weatherData.main.temp + "°C";
    document.querySelector(".description").innerText = weatherData.weather[0].description ;
    document.querySelector(".humidity").innerText = "Humidity : " + weatherData.main.humidity + " %";
    document.querySelector(".wind").innerText = "Wind Speed : " + weatherData.wind.speed + " km/h"; 
    document.querySelector(".weather-disp").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + weatherData.weather[0].description + "')";
}

function fetchWeather(query)
{
    const apiKey = "76e797f63642cc25d09b6247c760130b";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=metric").then((response) => {
        if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
        }
        return response.json();
    }).then((data) => displayWeather(data));
}

function reverseGeocode(latitude,longitude)
{
    var apikey = 'b617efce37314d738e0291357c271e77';
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
    var request_url = api_url + '?' + 'key=' + apikey + '&q=' + encodeURIComponent(latitude + ',' + longitude) + '&pretty=1' + '&no_annotations=1';

    // see full list of required and optional parameters:
    // https://opencagedata.com/api#forward

    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);

    request.onload = function() {
        // see full list of possible response codes:
        // https://opencagedata.com/api#codes

        if (request.status === 200){ 
        // Success!
        var data = JSON.parse(request.responseText);
        fetchWeather(data.results[0].components.city);
        console.log(data.results[0].components.city)

        } 
        else if (request.status <= 500){ 
        // We reached our target server, but it returned an error
                            
        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
        } 
        else {
        console.log("server error");
        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
        console.log("unable to connect to server");        
    };

    request.send();  // make the request
}

function getlocation()
{
    function success(data)
    {
        reverseGeocode(data.coords.latitude,data.coords.longitude);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, console.error);
    }
    else {
        fetchWeather("Delhi");
    }
}

document.querySelector(".search-btn").addEventListener("click", function () {
    const query = document.querySelector("input").value;
    console.log(query);
    fetchWeather(query);
});
  
document.querySelector(".search-input").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        const query = document.querySelector("input").value;
        console.log(query);
        fetchWeather(query);
    }
});

getlocation();