var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter a number to find square root ",num => {
	var n = parseInt(num);
	var res = Math.sqrt(n);
	console.log(res);	
	r1.close()
});