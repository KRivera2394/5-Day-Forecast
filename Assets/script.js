console.log("Hey");
//API FETCH
var ThreeDays = moment().format("MM DD YYYY");
var ThreeDays = moment().add(2, "days").calendar();
var FourDays = moment().add(3, "days").calendar();
var FiveDays = moment().add(4, "days").calendar();
var searchText = document.querySelector(".searchInput");
var search;
var searchHandle = function (event) {
  event.preventDefault();
  search = searchText.value.trim();

  fetchLocation(search);
};
//GEO LOCATION API 
function fetchLocation(search) {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      search +
      "&limit=&appid=fa5d675db8ac806ab936d2ccd4eb0ef2"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      fetchWeather(lat, lon);
      
    });
}
//5 DAY API
function fetchWeather(lat, lon) {
  fetch(
    "http://api.openweathermap.org/data/3.0/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=hourly,minutely,alerts&units=imperial&appid=fa5d675db8ac806ab936d2ccd4eb0ef2"
  )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
}
function displayWeather(data) {
  console.log(data);

//Variables DAY 1
  const icon = data.current.weather[0].icon;
  const Temp = data.current.temp;
  const Feels = data.current.feels_like;
  const Humidity = data.current.humidity;
  const WindSpeed = data.current.wind_speed;
  const UVIndex = data.current.uvi;

//Inserting DAY 1 into DOM

  document.querySelector(".iconOne").src =
    "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  document.querySelector(".cityOne").innerText = "Weather in:" + search;
  document.querySelector(".cityTemp").innerText = "Temperature:" + Temp + "℉";
  document.querySelector(".clouds").innerText = "Feels like:" + Feels + "℉";
  document.querySelector(".humidity").innerText =
    "Current Humidity:" + Humidity + "%";
  document.querySelector(".windSpeed").innerText =
    "Wind Speed:" + WindSpeed + "MPH";
  document.querySelector(".uvIndex").innerText = "UV Index:" + UVIndex;



//Variables DAY 2
  const icon2 = data.daily[0].weather[0].icon;
  const Temp2 = data.daily[1].temp.day;
  const Feels2 = data.daily[1].feels_like.day;
  const Humidity2 = data.daily[1].humidity;
  const WindSpeed2 = data.daily[1].wind_speed;
  const UVIndex2 = data.daily[1].uvi;

//Inserting DAY 2 into DOM
  document.querySelector(".iconTwo").src =
    "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";
  document.querySelector(".cityTempTwo").innerText =
    "Temperature:" + Temp2 + "℉";
  document.querySelector(".cloudsTwo").innerText = "Feels like:" + Feels2 + "℉";
  document.querySelector(".humidityTwo").innerText =
    "Current Humidity:" + Humidity2 + "%";
  document.querySelector(".windSpeedTwo").innerText =
    "Wind Speed:" + WindSpeed2 + "MPH";
  document.querySelector(".uvIndexTwo").innerText = "UV Index:" + UVIndex2;

  
  
//Variables DAY 3
  const icon3 = data.daily[1].weather[0].icon;
  const Temp3 = data.daily[2].temp.day;
  const Feels3 = data.daily[2].feels_like.day;
  const Humidity3 = data.daily[2].humidity;
  const WindSpeed3 = data.daily[2].wind_speed;
  const UVIndex3 = data.daily[2].uvi;

//Inserting DAY 3 into DOM
  document.querySelector(".iconThree").src =
    "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";
  document.querySelector(".dayThree").innerText = "" + ThreeDays;
  document.querySelector(".cityTempThree").innerText =
    "Temperature:" + Temp3 + "℉";
  document.querySelector(".cloudsThree").innerText =
    "Feels like:" + Feels3 + "℉";
  document.querySelector(".humidityThree").innerText =
    "Current Humidity:" + Humidity3 + "%";
  document.querySelector(".windSpeedThree").innerText =
    "Wind Speed:" + WindSpeed3 + "MPH";
  document.querySelector(".uvIndexThree").innerText = "UV Index:" + UVIndex3;

  
  
//Variables DAY 4
  const icon4 = data.daily[2].weather[0].icon;
  const Temp4 = data.daily[3].temp.day;
  const Feels4 = data.daily[3].feels_like.day;
  const Humidity4 = data.daily[3].humidity;
  const WindSpeed4 = data.daily[3].wind_speed;
  const UVIndex4 = data.daily[3].uvi;

//Inserting DAY 4 into DOM
  document.querySelector(".iconFour").src =
    "http://openweathermap.org/img/wn/" + icon4 + "@2x.png";
  document.querySelector(".dayFour").innerText = "" + FourDays;
  document.querySelector(".cityTempFour").innerText =
    "Temperature:" + Temp4 + "℉";
  document.querySelector(".cloudsFour").innerText =
    "Feels like:" + Feels4 + "℉";
  document.querySelector(".humidityFour").innerText =
    "Current Humidity:" + Humidity4 + "%";
  document.querySelector(".windSpeedFour").innerText =
    "Wind Speed:" + WindSpeed4 + "MPH";
  document.querySelector(".uvIndexFour").innerText = "UV Index:" + UVIndex4;

  
  
//Variables DAY 5
  const icon5 = data.daily[3].weather[0].icon;
  const Temp5 = data.daily[4].temp.day;
  const Feels5 = data.daily[4].feels_like.day;
  const Humidity5 = data.daily[4].humidity;
  const WindSpeed5 = data.daily[4].wind_speed;
  const UVIndex5 = data.daily[4].uvi;

//Inserting DAY 5 into DOM
  document.querySelector(".iconFive").src =
    "http://openweathermap.org/img/wn/" + icon5 + "@2x.png";
  document.querySelector(".dayFive").innerText = "" + FiveDays;
  document.querySelector(".cityTempFive").innerText =
    "Temperature:" + Temp5 + "℉";
  document.querySelector(".cloudsFive").innerText =
    "Feels like:" + Feels5 + "℉";
  document.querySelector(".humidityFive").innerText =
    "Current Humidity:" + Humidity5 + "%";
  document.querySelector(".windSpeedFive").innerText =
    "Wind Speed:" + WindSpeed5 + "MPH";
  document.querySelector(".uvIndexFive").innerText = "UV Index:" + UVIndex5;
showWeather();
 
}


//HIDES CARDS UNTIL BUTTON CLICK
function showWeather() {
  var weatherShow = document.getElementById("showWeather");
  weatherShow.setAttribute("style", "display: contents;");
}
//EVENTLISTENER ON BUTTON 
document.querySelector(".btn").addEventListener("click", searchHandle);

