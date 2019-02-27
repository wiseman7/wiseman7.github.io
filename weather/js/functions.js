/*****************************
 * Weather Site JavaScript Functions
 **************************************/

    // Variables for Function Use
    const curtemp = 31;
    const speed = 5;

    buildWC(speed, curtemp);

    const direction = "NNE";
    windDial(direction);



 // calculate wind chill temperature.
 function buildWC(speed, curtemp){
  
const feelTemp= document.getElementById('feelTemp');

// compute the windchill
let wc = 35.74 + 0.615 * curtemp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * curtemp * Math.pow(speed, 0.16);
console.log(wc);

// Round the answer down to integer
wc = Math.floor(wc);

// If chill is greater than temp, return the temp
wc = (wc > curtemp)?curtemp:wc;

// Display windchill
console.log(wc);

// wc = 'Feels like '+wc+' F;
wc = 'Feels like ' + wc + '&deg;F';
feelTemp.innerHTML= wc;

}

// Wind Dial Function
function windDial(direction){
    const windimg = document.getElementById("windimg");
    console.log(direction)

    // Determine the dial class
    switch (direction){
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

function getCondition(phrase){
   
    // Variables for images
    const cloudy = document.getElementById("rainy").src;
    const clear = document.getElementById("clear").src;
    const rain = document.getElementById("cloudy").src;
    const fog = document.getElementById("fog").src;
    const snow = document.getElementById("snow").src;

    if (phrase == str.includes("cloudy") || str.includes("overcast")){
      return cloudy;
    }
    else if (phrase == str.includes("clear")){
      return clear;
    }
    else if (phrase == str.includes("rain") || str.includes("Wet")){
        return rain;
    }
    else if (phrase == str.includes("fog")){
        return fog;
    }
    else if (phrase == str.includes("snow")){
        return snow;
    } 

}

function changeSummaryImage(getCondition()){
    
}

function convertMeters(meters){
    const feet = 3.28 * meters;
    const round = Math.round(feet);

    document.getElementById("convertMeters") = round;
}

 