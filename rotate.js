function rotateArr(arr, shift) {
	shift %= arr.length;

	if (shift > 0) {

		for (var i = arr.length - 1; i > 0; i--) {
			if (i - shift >= 0) {
				var temp = arr[i];
				arr[i] = arr[i - shift];
				arr[i - shift] = temp;
			} else {
				var temp = arr[i];
				arr[i] = arr[0];
				arr[0] = temp;
			}
		}

	} else {
		for (var i = 0; i < arr.length; i++) {
			if (i - shift < arr.length) {
				var temp = arr[i];
				arr[i] = arr[i - shift];
				arr[i - shift] = temp;
			} else {
				var temp = arr[i];
				arr[i] = arr[arr.length - 1];
				arr[arr.length - 1] = temp;
			}
		}
	}
	return arr;
}

console.log(rotateArr([1,2,3,4,5], 3));