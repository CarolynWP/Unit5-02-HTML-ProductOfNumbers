//use strict
"use strict"

function numberAdding(){
	// variables
	let firstNumber = parseInt(document.getElementById("first").value);
	let secondNumber = parseInt(document.getElementById("second").value);
	let sum = firstNumber
	
	//for loop to add both numbers together
	 for (let counter = 0;counter <= secondNumber; counter++) {
		 if (counter = secondNumber){
		 sum = sum + counter
		 }
		 else {
			 sum = sum + counter
		 }
	} 
	
	 //another for loop for negative numbers
	for (let counter = 0;counter >= secondNumber; counter--){
			 if (counter = secondNumber){
		 sum = sum + counter
			 }
		else {
			sum = sum + counter
		}
	} 

	//output
	document.getElementById("sum").innerHTML = 'YOUR NUMBER IS ' + sum + ", YES! " + sum + "!! " + sum + " IS SUCH A BEAUTIFUL NUMBER, DON'T YOU THINK??";
}