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


var storage = window.localStorage;