/*****************************
 * Weather Site JavaScript Functions
 **************************************/

    // Variables for Function Use
    const temp = 31;
    const speed = 5;

    buildWC(speed, temp);



 // calculate wind chill temperature.
 function buildWC(speed, temp){
  
const feelTemp= document.getElementById('feelTemp');

// compute the windchill
let wc = 35.74 + 0.615 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
console.log(wc);

// Round the answer down to integer
wc = Math.floor(wc);

// If chill is greater than temp, return the temp
wc = (wc > temp)?temp:wc;

// Display windchill
console.log(wc);

// wc = 'Feels like '+wc+' F;
wc = 'Feels like ' + wc + '&deg;F';
feelTemp.innerHTML= wc;

 }



 