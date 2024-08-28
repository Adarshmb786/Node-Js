var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter kilometers to convert to miles: ",km => {
	var km = parseInt(km);
	var miles = km * 0.621371;
	console.log("Miles: "+miles);
	r1.close()
});