
let playerPick = document.getElementById('player'),
	computerPick = document.getElementById('computer'),
	playerScore = 0,
	computerScore = 0;

function playGame (playerInput) {

	clearMessages();

	// Funkcja getMoveName 
	function getMoveName (argMoveId) {
		if(argMoveId == 1){
	    return 'kamień';
	  } else if (argMoveId == 2) {
	  	return 'papier';
	  } else if (argMoveId == 3) {
	  	return 'nożyce';
	  }

	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
	// Funkcjca wyświetlania wyniku
	function displayResult (computerMove, playerMove) {
		printMessage('Zagrałem ' + computerMove + ', a Ty graczu zagrałeś ' + playerMove + '!');

		if(computerMove == 'kamień' && playerMove == 'nożyce'){
			printMessage('Wygrywam rundę!');
		} else if (computerMove == 'nożyce' && playerMove == 'papier') {
			printMessage('Wygrywam rundę!');
		} else if (computerMove == 'papier' && playerMove == 'kamień') {
			printMessage('Wygrywam rundę!');
		} else if ( playerMove == 'kamień' && computerMove == 'nożyce'){
			printMessage('Miałeś farta i wygrałeś rundę!');
		} else if (playerMove == 'nożyce' && computerMove == 'papier') {
			printMessage('Miałeś farta i wygrałeś rundę!');
		} else if (playerMove == 'papier' && computerMove == 'kamień') {
			printMessage('Miałeś farta i wygrałeś rundę!');
		} else if (computerMove == playerMove) {
			printMessage('Mamy remis!');
		}
		setGamePoints();
		checkGameWinner();
	}

	// Ruchy komputera
	let randomNumber = Math.floor(Math.random() * 3 + 1),
		computerMove = getMoveName(randomNumber);

	console.log('Wylosowana liczba to: ' + randomNumber);

	// Ruchy gracza

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	displayResult(computerMove, playerMove);

// Liczenie wyniku

		function setGamePoints () {
			if(computerMove == 'kamień' && playerMove == 'nożyce'){
				computerScore++;
			} else if (computerMove == 'nożyce' && playerMove == 'papier') {
				computerScore++;
			} else if (computerMove == 'papier' && playerMove == 'kamień') {
				computerScore++;
			} else if ( playerMove == 'kamień' && computerMove == 'nożyce'){
				playerScore++;
			} else if (playerMove == 'nożyce' && computerMove == 'papier') {
				playerScore++;
			} else if (playerMove == 'papier' && computerMove == 'kamień') {
				playerScore++;
			}
			playerPick.innerHTML = "Player: " + playerScore;
			computerPick.innerHTML = "Computer: " + computerScore;
		}

		function checkGameWinner () {
			if (playerScore == 10) {
				alert('Chyba oszukiwałeś, bo wygrałeś całą grę :-|');
				alert('Zaczynamy od nowa');
				playerScore == 0;
				setGamePoints();
			} else if (computerScore == 10) {
				alert('Hah wygałem grę!');
				alert('Zaczynamy od nowa');
				computerScore == 0;
				setGamePoints();
			}
		}	


}
document.getElementById('play-rock').addEventListener('click', function(){
  	playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  	playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  	playGame(3);
});




