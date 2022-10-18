"use strict";
/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Review Assignment


   Filename: rb_formsubmit2.js

   Purpose: The purpose of this program is to verify that the form
            passes an initial validation test.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.
            
            For the customer form, the script also disables and enables
            the delivery and pickup options so that only one set of
            options is enabled at any one time.


*/
var swapVar = true;
function init() {
   document.getElementById("Secondary").style.display = 'none';
   document.getElementById("Background").onclick = swapDiv;
}

window.onload = init;



function swapDiv() {
	if(swapVar){
      document.getElementById("Secondary").style.display = 'block';
      document.getElementById("Primary").style.display = 'none';
      swapVar = false;
	}
    else{
      document.getElementById("Secondary").style.display = 'none';
      document.getElementById("Primary").style.display = 'block';
	  swapVar = true;
	}
   document.getElementById("Secondary").disabled = false;
   document.getElementById("Primary").disabled = true;
   document.getElementById("Background").id = "Swap";
   document.getElementById("Current").id = "Background";
   document.getElementById("Swap").id = "Current";
   document.getElementById("Background").onclick = swapDiv;
   document.getElementById("Current").onclick = swapFalse;
}

function swapFalse() {
	
}


/* Generate a random number */
var randomQ = randomInt(0, 10);

/* Identify the first quote element */
var quoteElem = document.getElementsByTagName("quote")[0];

/* Generate a quote and set it within the quote element */
quoteElem.innerHTML = getQuote(randomQ);

/* Generate a random number */
function randomInt(lowest, size) {
	var rand = Math.random() * size + lowest;
	return Math.floor(rand);
}

function getQuote(n) {
   var quotes = [
   "Success with Tess has changed my life!!!!! You are my hero, Tess! -- A.K.",
   "All our dreams can come true if we have the courage to pursue them.",
   "Opportunities don't happen. You create them.",
   "No one can make you feel inferior without your consent.",
   "If you're going through hell, keep going.",
   "Don't be afraid to give up the good to go for the great.",
   "The starting point of all achievement is desire.",
   "Success is the sum of small efforts, repeated day-in and day-out.",
   "All progress takes place outside the comfort zone.",
   "The only place where success comes before work is in the dictionary."
   ];
   
   return quotes[n];
}
