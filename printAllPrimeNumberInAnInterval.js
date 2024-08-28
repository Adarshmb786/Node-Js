var readline = require('readline');
var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Enter interval: ",num => {
	var n = parseInt(num);
	var flag = 0;
	for(var i=2; i<=num; i++){
		for(var j=2; j<i; j++){
			if(i%j == 0){
				flag = 1;
				break;
			}
		}
		if(flag == 0){
			console.log(i);
			
		}
		flag = 0;
	}
	r1.close();
	
})