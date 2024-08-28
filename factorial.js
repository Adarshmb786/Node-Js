var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter a number: ",num => {
	var n = parseInt(num);
	var f = 1;
	for(var i=1; i<=5; i++){
		f = i * f;
	}
	console.log(f);
	r1.close();	
})