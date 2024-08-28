var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter celcius: ",celcius => {
	var c = parseInt(celcius);
	var f = (c * 9/5) + 32;
	console.log("Fahrenheit: "+f);
	r1.close();
})