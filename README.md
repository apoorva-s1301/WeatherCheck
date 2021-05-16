# WeatherApp ☀️ ☁️ ⛈ ☔️ 💨
## ✏️ Description 
### A simple weather app to display basic weather information by city name. 
##### https://weather-check.000webhostapp.com/

## 📌 Features 
- It auto-displays the weather of the device's current location. This is achieved using navigator geolocation property which helps to get latitude and longitude of the user's position.
- It lets user search weather of over 200,000 cities.
- It also loads a background related to the weather conditions of the city searched.

## 📖 Usage guide 
#### 🚩 CAUTION : Make sure that your device allows location sharing to your browser as well as your browser allows location sharing to the website. Location related settings could prevent location auto-detection and display "No weather found.". However, manually searching for a valid city name always works.

- Allow the browser to access your location when prompted.
<img width="800" alt="Screenshot 2021-05-17 at 1 04 02 AM" src="https://user-images.githubusercontent.com/75029142/118410706-6c271f00-b6ae-11eb-96da-d3d106fc2616.png">

- Weather of the current city you are in will be auto displayed.(For example, Ghaziabad in my case.)   
<img width="800" alt="Screenshot 2021-05-17 at 12 27 57 AM" src="https://user-images.githubusercontent.com/75029142/118410700-63cee400-b6ae-11eb-8b4b-e5c94e8aea76.png">

- Search for the weather info of any city of your choice in the search bar.
<img width="800" alt="Screenshot 2021-05-17 at 1 02 24 AM" src="https://user-images.githubusercontent.com/75029142/118410754-bad4b900-b6ae-11eb-9654-932cacefdb33.png">

- Incase your browser doesn't support navigator geolocation property. Delhi's weather is returned by default.

#### API's used
- OpenWeatherMap's Current weather data API to get realtime weather info. (Allows 60 calls/min and 1,000,000 calls/month)
- OpenCage Geocoding API to convert latitude and longitude to text. (Allows 1 calls/sec and 2,500 calls/day)

#### Shortcomings
- Multiple search requests withing a second can cause error due to free API keys's restrictions.
- Current location auto-detection feature is not supported by Safari browser.

#### Contributing
- Contributions,issues and feature requests are welcome. 🤝

#### References 
- https://openweathermap.org/current
- https://opencagedata.com/api
- https://github.com/DenverCoder1/weather-app-tutorial
- https://www.youtube.com/watch?v=WZNG8UomjSI
