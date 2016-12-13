function braces(line) {
	var preSeq = [];
	for (var i = 0; i < line.length; i++) {
		if (line[i] == '}' || line[i] == ']' || line[i] ==')') {
			break;
		} else {
			preSeq.push(line[i]);
		}
	}
	for (var i = preSeq.length; i < line.length; i++) {
		switch (preSeq[(preSeq.length - 1) - (i - (preSeq.length - 1) - 1)]) {
			case '{':
				if (line[i] != '}') {
					return false;
				}
				break;
			case '[':
				if (line[i] != ']') {
					return false;
				}
				break;
			case '(':
				if (line[1] != ')') {
					return false
				}
				break;
			default:
				continue;
		}
	}
	return true;
}

console.log(braces('[{}]'))