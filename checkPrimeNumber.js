var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter a number to check whether it is prime or not: ",num => {
	var n = parseInt(num);
	var flag = 0;
	for(var i=2; i<n; i++){
		if(n%i == 0){
			flag = 1;
			break;
		}
	}
	if(flag == 0){
			console.log("Prime number");
	}else{
			console.log("Not a prime number");
	}

	r1.close();
	
})