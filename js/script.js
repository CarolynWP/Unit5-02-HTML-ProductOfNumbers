//use strict
"use strict"

function numberAdding(){
	// variables
	let firstNumber = parseInt(document.getElementById("first").value);
	let secondNumber = parseInt(document.getElementById("second").value);
	let sum = 0
	
	//for loop to multiply both numbers together
	 for (let counter = 0;counter < secondNumber; counter++) {
			sum = sum + firstNumber
	} 
	
	 //another for loop for negative numbers
	for (let counter = 0;counter > secondNumber; counter--){
		if (firstNumber > 0)
		 sum = sum - firstNumber

		else if (firstNumber > 0 && secondNumber > 0){
			sum = sum + firstNumber
		}

		else {
			sum = sum - firstNumber
		}
	} 

	//output
	document.getElementById("sum").innerHTML = 'YOUR NUMBER IS ' + sum + ", YES! " + sum + "!! " + sum + " IS SUCH A BEAUTIFUL NUMBER, DON'T YOU THINK??";
}