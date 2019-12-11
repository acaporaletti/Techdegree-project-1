/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `array of quotes from my various interests, all found on google 
***/
var quotes = [
  { quote: "Boy!",
    source:" Kratos",
    citation: "-God of War",
    year: 2018
},

  { quote: "Science isn't about why - it's about why not",
    source:" Cave Johnson",
    citation: "-Portal 2",
    year: 2011
},

  { quote: "Men and Women grow apart, but the journey they share will always be a part of them",
    source:" Ned Leeds",
    citation: "-Spider man: Far From Home",
    year: 2019
},

  { quote: "I'm Batman",
    name:" Deadpool",
    citation:"-Deadpool 2",
    year: 2018
},

{ quote: "The good thing about science is that it's true whether or not you believe in it",
  source:"-Neil deGrasse Tyson"
},

  { quote: "All sorts of things can happen when you're open to new ideas and playing around with things",
    source:"-Stephanie Kwolek"
}

]


/***
* `getRandomQuote` function
***/

var getRandomQuote = function() {
  var randomNumber = [Math.floor(Math.random() * quotes.length) + 1];
  return quotes[randomNumber];
}

console.log(getRandomQuote );


/***
* `printQuote` function
***/
function printQuote (){
  var randomQuote = getRandomQuote();
  var fullQuote = " ";

  fullQuote = document.getElementById('quote-box').innerHTML;
  fullQuote += '<p class = "quote">' + randomQuote.quote + "</p>";
  fullQuote += '<p class = "source">' + randomQuote.source + "</p>";
    if (randomQuote.citation) {
      fullQuote += '<span class = "citation">' + randomQuote.citation + "</span>";
    } if (randomQuote.year) {
      fullQuote += '<span class = "year">' + randomQuote.year + "</span> +  </p>";
      } else {
        return fullQuote;
      }

}

/***
 * Function to change the background of the page, found on https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
 */
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  }

random_bg_color();

/***
 * Auto refresh quote on 20 second interval, found on https://www.w3schools.com/jsref/met_win_setinterval.asp
 */
setInterval ((printQuote)={} ,20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);