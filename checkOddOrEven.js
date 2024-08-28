var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter a number: ",num => {
	var n = parseInt(num);
	if(num%2 == 0){
		console.log("Even number");		
	} else {
		console.log("Odd number");		
	}
	r1.close()
})