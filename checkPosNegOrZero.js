var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter a number: ",num => {
	var n = parseInt(num);
	if (n>0){
		console.log("Postive Number");
	} else if (n<0){
		console.log("Negative Number");
		
	} else {
		console.log("Zero");
		
	}
	r1.close();
})