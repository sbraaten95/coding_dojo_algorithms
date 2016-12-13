function rGCF(num1, num2, count) {
	count++;
	console.log(count)
	if (num1 == num2) {
		return num1
	} else if (num1 % num2 == 0) {
		if (num1 > num2) {
			return num2
		} else {
			return num1
		}
	} else {
		if (num1 > num2) {
			return rGCF(num1 - num2, num2, count)
		} else if (num1 < num2) {
			return rGCF(num1, num2 - num1, count)
		}
	}
}

function rGCF2(num1, num2, count) {
	count++
	console.log(count)
	if (num1 == num2) {
		return num1;
	} else if (num1 % num2 == 0) {
		return num2
	} else {
		if (num1 > num2) {
			if (num1 - num2 < num2) {
				return rGCF2(num1 - num2, num2 - (num1 - num2), count)
			} else {
				if (num1 - num2 == num2) {
					return num2;
				}
				return rGCF2(num1 - num2, num2, count)
			}
		} else if (num1 < num2) {
			if (num2 - num1 < num1) {
				return rGCF2(num1 - (num2 - num1), num2 - num1, count)
			} else {
				if (num2 - num1 == num1) {
					return num1;
				}
				return rGCF2(num1, num2-num1, count)
			}
		}
	}
}

console.log(rGCF2(123456,987654,0))