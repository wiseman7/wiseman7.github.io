'use strict';

document.querySelector("body").addEventListener('click', function (e) {
    var anchor = e.target.closest('a');
    if (anchor !== null) {
        console.log(anchor.textContent);
    }
}, false);

/*************************JSON************************************* */

let acmeURL = "/acme/acme/js/acme.json";
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

        // Json

        // let product-name = ____.name;
        // let product-image=__________.path;
        // let product-description = ________.description;
        // let manufacturer = _________________.manufacturer;
        // let reviews = ____________________.reviews;
        // let price = ______________.price;


        /* HTML */

        // document.getElementById('product-name').innerHTML = product-name;
        // document.getElementById('product-image').innerHTML = product-image;
        // document.getElementById('manufacturer').innerHTML = manufacturer;
        // document.getElementById('reviews').innerHTML = reviews;
        // document.getElementById('price').innerHTML = price;


        // If there is an error
        .catch(function (error) {
            console.log('There was a fetch problem: ', error.message);
        })
}