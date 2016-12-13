function swappairs(arr) {
	var temp = 0;
	for (var i = 0; i < arr.length; i += 2) {
		if (i + 1 >= arr.length) {
			break;
		}
		
		temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
	console.log(arr);
}

swappairs([1,2,3])