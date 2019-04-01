'use strict';



/*************************JSON************************************* */

let acmeURL = "/acme/acme/js/acme.json";
fetchData(acmeURL);

function fetchData(acmeURL) {
    fetch(acmeURL)
        .then(function (response) {
            if (response.ok) {
                var result = response.json();
                console.log('result', result);
                return result;
            }
            throw new ERROR('Network response was not OK.');
        })
        .then(function (data) {
            console.log(data);
           
            document.querySelector("body").addEventListener('click', function (e) {
                var anchor = e.target.closest('a');
                if (anchor !== null) {
                    console.log(anchor.textContent);
                    if (anchor.textContent == "Anvils"){
                        console.log(data.Anvils);
                       document.getElementById('product-name').innerHTML = data.Anvils.name;
                    }
                }
            }, false);   

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