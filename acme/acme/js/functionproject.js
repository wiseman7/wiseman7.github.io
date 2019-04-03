// Put strict at the top of the document
'use strict';


let productContainer = document.getElementById('product-content');
let homeContainer = document.getElementById('principal-home');


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
                    var home = 0;
                    if (anchor.textContent == "Anvils") {
                        console.log(data.Anvils);
                        document.getElementById('product-name').innerHTML = data.Anvils.name;
                        document.getElementById('product-image').src = data.Anvils.path;
                        document.getElementById('product-description').innerHTML = data.Anvils.description;
                        document.getElementById('manufacturer').innerHTML = data.Anvils.manufacturer;
                        document.getElementById('reviews').innerHTML = data.Anvils.reviews;
                        document.getElementById('price').innerHTML = data.Anvils.price;
                    } else if (anchor.textContent == "Explosives") {
                        console.log(data.Explosives);
                        document.getElementById('product-name').innerHTML = data.Explosives.name;
                        document.getElementById('product-image').src = data.Explosives.path;
                        document.getElementById('product-description').innerHTML = data.Explosives.description;
                        document.getElementById('manufacturer').innerHTML = data.Explosives.manufacturer;
                        document.getElementById('reviews').innerHTML = data.Explosives.reviews;
                        document.getElementById('price').innerHTML = data.Explosives.price;
                    } else {
                        home = 1;
                    }
                }
                if (home == 0) {
                    productContainer.setAttribute('class', ''); // removes hide class
                    homeContainer.setAttribute('class', 'hide'); // hide home container
                } else {
                    productContainer.setAttribute('class', 'hide'); // removes hide class
                    homeContainer.setAttribute('class', ''); // hide home container
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



// let product-image = info.path;
// console.log('product image', product-image);

// let product-description = info.description;
// console.log('product description', product-description);

// let manufacturer = info.manufacturer;
// console.log('manfacturer', manufacturer);

// let reviews = info.reviews;
// console.log('reviews', reviews);

// let price = info.price;
// console.log('price', price);