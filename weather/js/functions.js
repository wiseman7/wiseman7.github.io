/*****************************
 * Weather Site JavaScript Functions
 **************************************/

'use strict';
let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('page-content');

// Variables for Function Use
// const curtemp = 55;
// const speed = 5;

// buildWC(speed, curtemp);

// //const direction = "SW";
// windDial(direction);

// //const phrase = "rain";
// const condition = getCondition(phrase);
// changeSummaryImage(condition);

// const meters = 25;
// convertMeters(meters);


// calculate wind chill temperature.
function buildWC(speed, curtemp) {

  //const feelTemp = document.getElementById('feelTemp1');

  // compute the windchill
  let wc = 35.74 + 0.615 * curtemp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * curtemp * Math.pow(speed, 0.16);
  console.log(wc);

  // Round the answer down to integer
  wc = Math.floor(wc);

  // If chill is greater than temp, return the temp
  wc = (wc > curtemp) ? curtemp : wc;

  // Display windchill
  console.log(wc);
  //feelTemp.innerHTML = wc;

  // wc = 'Feels like '+wc+' F;
  // wc = 'Feels like ' + wc + '&deg;F';
  //feelTemp.innerHTML = wc;

  return wc;
}

// Wind Dial Function
function windDial(direction) {
  const windimg = document.getElementById("windimg");
  console.log(direction);

  // Determine the dial class
  switch (direction) {
    case "North":
    case "N":
      windimg.setAttribute("class", "n");
      break;
    case "NE":
    case "NNE":
    case "ENE":
      windimg.setAttribute("class", "ne");
      break;
    case "NW":
    case "NNW":
    case "WNW":
      windimg.setAttribute("class", "nw");
      break;
    case "South":
    case "S":
      windimg.setAttribute("class", "s");
      break;
    case "SE":
    case "SSE":
    case "ESE":
      windimg.setAttribute("class", "se");
      break;
    case "SW":
    case "SSW":
    case "WSW":
      windimg.setAttribute("class", "sw");
      break;
    case "East":
    case "E":
      windimg.setAttribute("class", "e");
      break;
    case "West":
    case "W":
      windimg.setAttribute("class", "w");
      break;
  }
}
// interpret phrase to a single id

function getCondition(phrase) {
  console.log('phrase: ' + phrase);
  if (phrase.includes("Cloudy") || phrase.includes("Overcast")) {
    return "cloudy";
  } else if (phrase.includes("Clear") || phrase.includes("Sunny")) {
    return "clear";
  } else if (phrase.includes("Rain") || phrase.includes("Thunder") || phrase.includes("Wet") || phrase.includes("Shower")) {
    return "rain";
  } else if (phrase.includes("Fog")) {
    return "fog";
  } else if (phrase.includes("Snow")) {
    return "snow";
  }

}

// Change background image to match weather

function changeSummaryImage(condition) {
  switch (condition) {
    case "cloudy":
      console.log(condition);
      document.getElementById("curWeather").setAttribute('class', 'cloud');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/clouds_250.jpg');
      document.getElementById("weatherImage").setAttribute('alt', "cloudy weather");
      document.getElementById("summary-heading").innerHTML = "Cloudy";
      break;
    case "clear":
      console.log(condition);
      document.getElementById("curWeather").setAttribute('class', 'clear');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/clear_250.jpg');
      document.getElementById("weatherImage").setAttribute('alt', "clear weather");
      document.getElementById("summary-heading").innerHTML = "Clear";
      break;
    case "fog":
      console.log(condition);
      document.getElementById("curWeather").setAttribute('class', 'fog');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/fog_250.jpg');
      document.getElementById("weatherImage").setAttribute('alt', "foggy weather");
      document.getElementById("summary-heading").innerHTML = "Foggy";
      break;
    case "snow":
      console.log(condition);
      document.getElementById("curWeather").setAttribute('class', 'snow');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/snow_250.jpg');
      document.getElementById("weatherImage").setAttribute('alt', "snowy weather");
      document.getElementById("summary-heading").innerHTML = "Snow";
      break;
    case "rain":
      console.log(condition);
      document.getElementById("curWeather").setAttribute('class', 'rain');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/rain_250.jpg');
      document.getElementById("weatherImage").setAttribute('alt', "rainy weather");
      document.getElementById("summary-heading").innerHTML = "Rainy";
      break;
  }

}
// Convert meters to feet and round
function convertMeters(meters) {
  const feet = 3.28 * meters;
  const round = Math.round(feet);

  document.getElementById("convertMeters").innerHTML = round;
}







// convert format hours to a 12 hour format
function format_time(hour) {
  if (hour > 23) {
    hour -= 24;
  }
  let amPM = (hour > 11) ? "pm" : "am";
  if (hour > 12) {
    hour -= 12;
  }
  if (hour == 0) {
    hour = "12";
  }
  return hour + amPM;
}

// Get the next hour based on the current time
let date = new Date();
let nextHour = date.getHours() + 1;

// Build the hourly temperature list
function buildHourlyData(nextHour, hourlyTemps) {
  let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F | </li>';
  // for (let i = 1, x = hourlyTemps.length; i < x; i++){
  for (let i = 1, x = 13; i < x; i++) {
    hourlyListItems += '<li>' + format_time(nextHour + i) + ': ' + hourlyTemps[i] + '&deg;F | </li>'
  }
  console.log('HourlyList is: ' + hourlyListItems);
  return hourlyListItems;
}

/*************************************  API *********************************************/

// Header Id
var idHeader = {
  headers: {
    "User-Agent": "Student Learning Project - wis16002@byui.edu"
  }
}

//Get local storage
var storage = window.localStorage;




/***************************************Get Location****************************/
// Get location info from NWS API
// Gets location information from the NWS API
function getLocation(locale) {
  const URL = "https://api.weather.gov/points/" + locale;
  // NWS User-Agent header (built above) will be the second parameter 
  fetch(URL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Let's see what we got back
      console.log('Json object from getLocation function:');
      console.log('data: ', data);
      // Store data to localstorage 
      storage.setItem("locName", data.properties.relativeLocation.properties.city);
      storage.setItem("locState", data.properties.relativeLocation.properties.state);

      getHourly(data.properties.forecastHourly);
      getWeather(data.properties.forecastHourly);
      // Next, get the weather station ID before requesting current conditions 
      // URL for station list is in the data object 
      let stationsURL = data.properties.observationStations;
      // Call the function to get the list of weather stations
      getStationId(stationsURL);
    })
    .catch(error => console.log('There was a getLocation error: ', error))
} // end getLocation function


/********************************Get Station Id****************************/

/* getStationId() */
function getStationId(stationsURL) {
  fetch(stationsURL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      //double check work
      console.log('From getStationId function:');
      console.log(data);

      // Store station ID and elevation (in meters - it will need to be converted to feet)
      let stationId = data.features[0].properties.stationIdentifier;

      console.log('station id ', stationId);
      let stationElevation = data.features[0].properties.elevation.value;
      console.log('Station and Elevation are: ' + stationId, stationElevation);

      //store data in localstorage
      storage.setItem("stationId", stationId);
      storage.setItem("stationElevation", stationElevation);

      // request the current weather for this station
      //getWeather(stationId);
    })
    .catch(error => console.log('There was a getStationId error: ', error))
} // end getStationId function


/**************************** Get Weather ***********************************/


// Gets current weather info fro a specific weather station from the NWS API
function getWeather(stationId) {
  // This is the URL for current observation data
  //const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
  // NWS User-Agent header (built above) will be the second parameter
  //fetch(URL, idHeader)
  fetch(stationId)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Check what I get back
      console.log('From getWeather function: ');
      console.log('data', data);
      var info = data.properties.periods[0];
      console.log('information: ', info);
      // Store weather info to localStorage
      storage.setItem('temp', info.temperature);

      storage.setItem('shortForecast', info.shortForecast);
      var speed = parseInt(info.windSpeed);
      let wc = buildWC(speed, info.temperature);
      storage.setItem('windchill', wc);
      storage.setItem('windDirection', info.windDirection);
      storage.setItem('windSpeed', info.windSpeed);

      // High and low temp
      //storage.setItem('temeratureHigh', info.temperature);
      storage.setItem('temperatureLow', data.properties.periods[1].temperature);


      // Build the page for viewing
      buildPage();

    })
    .catch(error => console.log('There was a getWeather error: ', error))
} // end of getWeather function


function getHourly(URL) {
  fetch(URL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Check what I get back
      console.log('From getHourly function: ');
      console.log('data', data);

      var d = new Date();
      var hour = d.getHours() + 1;
      // console.log(hour);
      let Allhourly = data.properties.periods;
      let hourly = []
      // console.log(Allhourly[0]);
      for (let i = 0; i < 13; i++)
      {
        hourly.push(Allhourly[i].temperature);
      }

      
      let ol = document.querySelector('ol');
      // console.log(hour);
      ol.innerHTML = buildHourlyData(hour, hourly);
      // for (var i = 0; i < 12; i++) {
      //   console.log('hourly', hourly[i].temperature);
      //   let li = document.createElement('li');

      //   if(hour==24){
      //     hour = 0;
      //   }
      //   li.textContent = hour + ":00 " + hourly[i].temperature + "\xB0F";
      //   ol.appendChild(li);
      //   hour++;
      // }
      // console.log('ol: ', ol);
      contentContainer.setAttribute('class', ''); // removes hide class
      statusContainer.setAttribute('class', 'hide');
      //console.log('URL: ', URL);
    })
    .catch(error => console.log('There was a getHourly error: ', error))

}

function convertToFahrenheit(temp) {
  var celius = Math.round((temp - 32) * (5 / 9));
  return celius;
}

function buildPage() {
  var temp = storage.getItem('temp');
  var wichill = storage.getItem('windchill');
  var direction = storage.getItem('windDirection');
  var phrase = storage.getItem('shortForecast');
  var wispeed = storage.getItem('windSpeed');
  var titlename = storage.getItem('locName');
  var titlestate = storage.getItem('locState');
  var displaytitle = titlename + ', ' + titlestate;
  //var hightemp = storage.getItem('temperatureHigh');
  var lowtemp = storage.getItem('temperatureLow');
  temp = parseFloat(temp);
  windDial(direction);

  //const phrase = "rain";
  const condition = getCondition(phrase);
  changeSummaryImage(condition);

  const meters = 25;
  convertMeters(meters);

  document.getElementById('curtemp1').innerHTML = temp;
  document.getElementById('feelTemp1').innerHTML = wichill;
  document.getElementById('speednum').innerHTML = wispeed;
  document.getElementById('direction').innerHTML = direction;
  document.getElementById('summary-heading').innerHTML = phrase;
  document.getElementById('locName').innerHTML= displaytitle;
  // document.getElementById('locState').innerHTML = titlestate;
  //document.getElementById('high1').innerHTML = hightemp;
  document.getElementById('high1').innerHTML = temp;
  document.getElementById('low1').innerHTML = lowtemp;
}