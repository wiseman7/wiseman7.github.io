// Add 'use strict' directive at the top of the new file



let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('page-content');


// fetch function
let weatherURL = "path/to/weather.json";
function fetchData(weatherURL){
    let cityName = 'Greenville'; 
    fetch(weatherURL){
        .then(function(response){
            if(response.ok){
            return response.json();
        }
        throw new ERROR('Network response was not OK.');
        })
        .then(function(data){
            console.log(data);
            let g = data[cityName];

            // Get the location data
            let locName = g.City;
            let locState = g.State;
            let fullName = locName + ', ' + locState;
            // see if it worked
            console.log('fullName is: ' + fullName);

            // Temperature Data

            // Wind Data

            // Current conditions

            // hourly data

            let pageTitle = document.getElementById('page-title');
            let fullNameNode = document.createTextNode(fullName);
            pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);

            // set the location info
            // get the h1 to display the city location
            let contentHeading = document.getElementById('locName');
            contentHeading.innerHTML = fullName;

            // temp info

            // wind info

            // current conditions info

            // hourly temp info

            // change the status of the containers
            contentContainer.setAttribute('class', ''); // removes hide class
            statusContainer.setAttribute('class', 'hide'); // hide status container
        })
        .catch(function(error){
            console.log('There was a fetch problem: ', error.message);
            statusContainer.innerHTML = 'Sorry, the data could not be processed.';
        })
    }
}