function rollOne() {
	return Math.floor(Math.random() * 6 + 1);
}

function playStatistics3(num) {
	var min = 7;
	var max = 0, sum = 0;
	for (var i = 0; i < num; i++) {
		var roll = rollOne();
		if (roll < min) {
			min = roll;
		}
		if (roll > max) {
			max = roll;
		}
		sum += roll;
	}
	console.log(min + " " + max + " " + sum);
}

playStatistics3(5);