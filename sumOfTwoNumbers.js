var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter first number ",num1 => {
	var n1 = parseInt(num1);
	r1.question("Enter second number ",num2 => {
		var n2 = parseInt(num2);
		var result = n1 + n2;
		console.log("Sum of two number is "+result);
		r1.close();
	})
})