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
	printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

	if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Wygrana komputera');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('Wygrana komputera');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Wygrana komputera');
} else if ( playerMove == 'kamień' && computerMove == 'nożyce'){
	printMessage('Wygrana gracza');
} else if (playerMove == 'nożyce' && computerMove == 'papier') {
		printMessage('Wygrana gracza');
} else if (playerMove == 'papier' && computerMove == 'kamień') {
		printMessage('Wygrana gracza');
	} else if (computerMove == playerMove) {
		printMessage('Remis!');
	}
}

// Ruchy komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// printMessage('Ruch komputera: ' + computerMove);

// Ruchy gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


// printMessage('Ruch gracza: ' + playerMove);

// Wynik gry
/*
// Remis
if (computerMove == playerMove) {
	printMessage('Remis!');
}
// Wygrana komutera

if( computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Wygrana komputera');
} 
	else if (computerMove == 'nożyce' && playerMove == 'papier') {
		printMessage('Wygrana komputera');
} 
	else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Wygrana komputera');
}

if( playerMove == 'kamień' && computerMove == 'nożyce'){
	printMessage('Wygrana gracza');
} 
	else if (playerMove == 'nożyce' && computerMove == 'papier') {
		printMessage('Wygrana gracza');
}
	else if (playerMove == 'papier' && computerMove == 'kamień') {
		printMessage('Wygrana gracza');
	}
*/
printMessage(displayResult(computerMove, playerMove));

