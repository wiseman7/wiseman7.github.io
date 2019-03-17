// these functions will gather together to get weather info for the current location and insert a web page with the data.
'use strict';

// Global varibable for a custom header to show where we get the information
var idHeader = {
    headers: {
        "User-Agent": "Student Learning Project - wis16002@byui.edu"
    }
}

// call the function to get our location
getGeoLocation();



// get longitude and latitude of current location
function getGeoLocation() {
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            // Combine the values
            const locale = lat + "," + long;
            console.log(`Lat and Long are: ${locale}.`);

            // Call the getLocation function, send locale as parameter
            getLocation(locale);

        })
    } else {
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
    } // end else
} // end of getGeoLocation

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
            console.log(data);
            // Store data to localstorage 
            storage.setItem("locName", data.properties.relativeLocation.properties.city);
            storage.setItem("locState", data.properties.relativeLocation.properties.state);

            // Next, get the weather station ID before requesting current conditions 
            // URL for station list is in the data object 
            let stationsURL = data.properties.observationStations;
            // Call the function to get the list of weather stations
            getStationId(stationsURL);
        })
        .catch(error => console.log('There was a getLocation error: ', error))
} // end getLocation function


/* getStationId() */
function getStationId(stationsURL) {
    fetch(stationsURL, idHeader)
    .then(function(response) {
        if (response.ok){
            return response.json();
        }
        throw new ERROR('Response not OK.');
    })
    .then(function (data){
        //double check work
        console.log('From getStationId function:');
        console.log(data);

        // Store station ID and elevation (in meters - it will need to be converted to feet)
        let stationId = data.features[0].properties.stationIdentifier;
        let stationElevation = data.features[0].properties.elevation.value;
        console.log('Station and Elevation are: ' + stationId, stationElevation);

        //store data in localstorage
        storage.setItem("stationId", stationId);
        storage.setItem("stationElevation", stationElevation);

        // request the current weather for this station
        getWeather(stationId);
    })
    .catch(error => console.log('There was a getStationId error: ', error))
} // end getStationId function

// Gets current weather info fro a specific weather station from the NWS API
function getWeather(stationId) {
    // This is the URL for current observation data
    const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
    // NWS User-Agent header (built above) will be the second parameter
    fetch(URL, idHeader)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new ERROR('Response not OK.');
    })
    .then(function (data) {
        // Check what I get back
        console.log('From getWeather function: ');
        console.log(data);

        // Store weather info to localStorage
        storage.setItem("temerature", temperature);
        storage.setItem("testDescription", textDiscription);
        storage.setItem("windChill", windChill);
        storage.setItem("windDirection", windDirection);
        storage.setItem("windSpeed", windSpeed);
        

        // Build the page for viewing

    })
    .catch(error => console.log('There was a getWeather error: ', error))
} // end of getWeather function

var storage = window.localStorage;