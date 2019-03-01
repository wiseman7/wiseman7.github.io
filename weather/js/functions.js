/*****************************
 * Weather Site JavaScript Functions
 **************************************/

    // Variables for Function Use
    const curtemp = 55;
    const speed = 5;

    buildWC(speed, curtemp);

    const direction = "NNE";
    windDial(direction);

    const phrase = "snow";
    const condition = getCondition(phrase);
    changeSummaryImage(condition);

    const meters = 25;
    convertMeters(meters);

 
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
feelTemp.innerHTML = wc;

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
// interpret phrase to a single id

function getCondition(phrase){
   
    if (phrase.includes("cloudy") || phrase.includes("overcast")){
      return "cloudy";
    }
    else if (phrase.includes("clear") || phrase.includes("sunny")){
      return "clear";
    }
    else if (phrase.includes("rain") || phrase.includes("Wet") || phrase.includes("shower")){
        return "rain";
    }
    else if (phrase.includes("fog")){
        return "fog";
    }
    else if (phrase.includes("snow")){
        return "snow";
    } 

}

// Change background image to match weather

function changeSummaryImage(condition){
switch (condition)
  {
    case "cloudy":
    console.log(condition);
      document.getElementById("curWeather").setAttribute('class','cloud');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/clouds_250.jpg');
      break;
    case "clear":
    console.log(condition);
      document.getElementById("curWeather").setAttribute('class','clear');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/clear_250.jpg');
      break;
    case "fog":
    console.log(condition);
      document.getElementById("curWeather").setAttribute('class','fog');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/fog_250.jpg');
      break;
    case "snow":
    console.log(condition);
      document.getElementById("curWeather").setAttribute('class','snow');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/snow_250.jpg');
      break;
    case "rainy":
    console.log(condition);
      document.getElementById("curWeather").setAttribute('class','rain');
      document.getElementById("weatherImage").setAttribute('src', 'optimized-images/rain_250.jpg');
      break;
  }
    
}
// Convert meters to feet and round
function convertMeters(meters){
    const feet = 3.28 * meters;
    const round = Math.round(feet);

    document.getElementById("convertMeters").innerHTML = round;
}

 