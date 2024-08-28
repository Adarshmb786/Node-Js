var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter first number: ",num1 =>{
	var a = parseInt(num1);
	r1.question("Enter second number: ",num2 => {
		var b = parseInt(num2);
		var temp;
		temp = a;
		a = b;
		b = temp;
		console.log("\nAfter swap, \nFirst number: "+a+"\nSecond number: "+b);
		r1.close();
		
	})
})