
'use strict';


/*************************JSON************************************* */

let acmeURL = "../js/acme.json";
fetchData(acmeURL);

function fetchData(acmeURL) {
    fetch(acmeURL)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Network response was not OK.');
        })
        .then(function (data) {
            console.log(data);

        })

        
// If there is an error
.catch(function (error) {
    console.log('There was a fetch problem: ', error.message);
})
}