var tracker = require("tracker");
var events = require("events");
var readline = require("readline");

//This is a quick example of how to create a line reader (like getLine from
//java or fgets from C )

//In NodeJS a convenient  module that provides commandline input capabilities
//is the "readline" module.  Readers are usually created from this interface
//implementation from the readline interface.
//We could also create a reader by processing the stdin stream directly
//running code on 'data' events and 'end' events but this is a quick and
//convenient way to interact on the commandline

//And frankly it handles prompting much better with the question function
const reader = readline.createInterface({
    input: process.stdin,//use std in as this reader's input/readable stream
    output: process.stdout // std out as the reader's output/writable stream
});

//the interesting thing about the readline is that it does the reading for you
// you just attach the streams and tell the readline how to serve requests and
//handle events.  But this is just a convenient mask for the readable and
//writable streams we learned about.  It's not always the most appropriate way
//to handle data.

//the readLine module provides a lot of useful functions.  One of them is
//'Question' which prompts the user with a provided string and runs the
//provided callback once the user enters their answer.

reader.question('What actvity did you perform? \
(Walking/Running/Swimming)', answer => {
    
    reader.question('For how long? (in minutes)', time =>{
	
	reader.question('How far? (in miles)', distance => {

	    reader.question('What is your weight today? (in pounds)', weight =>
			    {
				//Notice that current scope is still able to
				//data provided in previous callbacks.
				var current = new tracker(answer,weight, distance, time);
				//demos JS Strig interpolation using
				//"Template Strings"
				console.log(`Calories Burned: ${current.calculate()}`);
			    })
	})
    })
})



var processing= function(){
    
    console.log("Processing...");
}
