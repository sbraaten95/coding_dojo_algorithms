$(document).ready(function() {
	$('button').click(function() {
		switch ($(this).text()) {

			case 'trigarea':
				function triangleArea(a, b, c) {
					// p is half the total perimeter
					var p = (a + b + c) / 2;
					var area = Math.pow((p*(p-a)*(p-b)*(p-c)), 0.5);
					return area;
				}
				console.log(triangleArea(5,6,7));
				break;

			case 'multiplyDivide':
				function multiplyDivide(x, y) {
					console.log(x + " multiplied by " + y + ": " + x*y + "\n" + x + " divided by " + y + ": " + x/y + "\n" + y + " divided by " + x + ": " + y/x);
				}
				multiplyDivide(10, 9);
				break;

			case 'guessingGame':
				function guessingGame() {
					var rand = Math.floor((Math.random() * 10) + 1);
					if (prompt("I have picked a number from 1 to 10. What do you think it is?") !== rand) {
						console.log("Not matched.");
					} else {
						console.log("Good work");
					}
				}
				guessingGame();
				break;

			case 'playGuessingGameUntilYouWin!':
				function playWin() {
					var rand = Math.floor((Math.random() * 10) + 1);
					var guess = prompt("I have picked a number from 1 to 10. What do you think it is?");
					while ( guess != rand) {
						guess = prompt("Not matched. Try again! To quit enter q");
						if (guess == 'q')
							break;
					}
					if (guess != 'q')
						console.log("Good work! You guessed it to be " + rand + " correctly!");
				}
				playWin();
				break;

			case 'addClass':
				function addAClass(e, c) {
					document.getElementsByTagName(e)[0].className = c;
				}
				addAClass('H1', 'green');
				break;

			case 'deleteDiv':
				function deleteDiv() {
					(document.getElementsByTagName('button')[5]).removeChild(document.getElementById('delete'));
				}
				deleteDiv();
				break;

			case 'alertMessage':
				function alertMessage() {
					alert(document.getElementById('text').value);
				}
				alertMessage();
				break;

			default:
				console.log($(this).text);
		}
	});
});