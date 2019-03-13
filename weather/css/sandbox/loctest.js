// these functions will gather together to get weather info for the current location and insert a web page with the data.
'use strict';


// call the function to get our location
getGeoLocation();



// get longitude and latitude of current location
function getGeoLocation()
{
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';
} // end of getGeoLocation


var storage = window.localStorage;