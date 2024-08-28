var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter first number: ",num1 => {
	r1.question("Enter second number: ",num2 => {
		r1.question("Enter third number: ",num3 => {
			var n1 = parseInt(num1);
			var n2 = parseInt(num2);
			var n3 = parseInt(num3);
			
			if(num1>num2 && num1>num3) {
				console.log("First Number is greater");
			} else if(num2>num1 && num2>num3){
				console.log("Second Number is greater");
				
			} else if(num3>num1 && num3>num2) {
				console.log("Third number is greater");
				
			}
			r1.close();
		})
	})
})