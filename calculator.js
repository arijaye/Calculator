#!/usr/bin/env node

/** Current total value on calculator */
let total = 0;

/** Readline object */
const readline = require('readline').createInterface( {
    input: process.stdin,
	output: process.stdout
});

/**
* Prompts user for operator. If operator is invalid, error message 
* is printed and user is prompted again for an operator.
**/
function getNumber(){
	//Print current total
	console.log(`\nCurrent total: ${total}\n`);
	
	//Get operator from user
	readline.question('Enter operation (+-*/ , q to quit): ', operation => {
		//Check if operator is invalid
		if (operation != 'q' && operation != '+' && operation != '-' && 
			operation != '*' && operation != '/'){
			//If invalid, print message and prompt user for operator again
			console.log("\nInvalid operator! Try again\n")
			getNumber();
		} else {
			//If valid, calculate using the operator
			calculate(operation);
		}
	});
}

/**
* Takes operator from getNumber() method. Prompts user for number 
* to operate on. If number is invalid, error message is printed 
* and user is prompted again for a number.
* @param operation: char operator given from getNumber()
**/
function calculate(operation){

	//Quit the game
	if(operation == 'q'){
		console.log(`Final value: ${total}`);
		readline.close();
		
	//User wants to add
	} else if (operation == '+'){
		readline.question('Enter value: ' , number => {
			//parseFloat() returns either a number or NaN
			number = parseFloat(number);
			//check if user entered String that can't be parsed to a number
			if(isNaN(number)){
				console.log("\nInvalid entry! Try again\n");
				//prompt user to enter number again
				calculate(operation);
			} else {
				//add and prompt user for operator again
				total += number;
				getNumber();
			}
		});
		
	//user wants to subtract
	} else if (operation == '-'){
                readline.question('Enter value: ' , number => {
			number = parseFloat(number);
			//check if user entered String that can't be parsed to a number
			if(isNaN(number)){
				console.log("\nInvalid entry! Try again\n");
				//prompt user to enter number again
				calculate(operation);
			} else {
				//subtract and prompt user for operator again
				total -= number;
				getNumber();
			}
		});
		
	//user wants to multiply
	} else if (operation == '*'){
		readline.question('Enter value: ' , number => {
			number = parseFloat(number);
			//check if user entered String that can't be parsed to a number
			if(isNaN(number)){
				console.log("\nInvalid entry! Try again\n");
				//prompt user to enter number again
				calculate(operation);
			} else {
				//multiply and prompt user for operator again
				total *= number;
				getNumber();
	 		}
        }); 
        
    //user wants to divide
	} else if (operation == '/'){
		readline.question('Enter value: ' , number => {
			number = parseFloat(number);
			//check if user entered String that can't be parsed to a number
			if(isNaN(number)){
				console.log("\nInvalid entry! Try again\n");
				//prompt user to enter number again
				calculate(operation);
            } else if (number == 0){
            	console.log("\nCan't divide by zero! Try again\n");
            	calculate(operation);
			} else {
				total /= number;
				//divide and prompt user for operator again
				getNumber();
            }
        }); 
	} 
}

//Welcome user and then prompt for operator
console.log("Welcome to Running-Calc.js");
getNumber();
