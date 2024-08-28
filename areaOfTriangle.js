var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter base: ",b => {
	var base = parseInt(b);
	r1.question("Enter height: ",h => {
		var height = parseInt(h);
		var area = (base * height) / 2;
		console.log("Area of traingle: "+area);
		r1.close()		
	})
})