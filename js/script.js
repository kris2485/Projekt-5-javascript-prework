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
			printMessage('Wygrywam!');
		} else if (computerMove == 'nożyce' && playerMove == 'papier') {
			printMessage('Wygrywam!');
		} else if (computerMove == 'papier' && playerMove == 'kamień') {
			printMessage('Wygrywam!');
		} else if ( playerMove == 'kamień' && computerMove == 'nożyce'){
			printMessage('Miałeś farta i wygrałeś!');
		} else if (playerMove == 'nożyce' && computerMove == 'papier') {
			printMessage('Miałeś farta i wygrałeś!');
		} else if (playerMove == 'papier' && computerMove == 'kamień') {
			printMessage('Miałeś farta i wygrałeś!');
		} else if (computerMove == playerMove) {
			printMessage('Mamy remis!');
		}
	}

	// Ruchy komputera
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	// Ruchy gracza

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	displayResult(computerMove, playerMove);
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



