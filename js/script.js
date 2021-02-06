

// Ruchy komputera
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
}

printMessage('Ruch komputera: ' + computerMove);

// Ruchy gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == 2) {
	playerMove = 'papier';
} else if (playerInput == 3) {
	playerMove = 'nożyce';
}

printMessage('Ruch gracza: ' + playerMove);

// Wynik gry

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
// Wygrana gracza

if( playerMove == 'kamień' && computerMove == 'nożyce'){
	printMessage('Wygrana gracza');
} 
	else if (playerMove == 'nożyce' && computerMove == 'papier') {
		printMessage('Wygrana gracza');
}
	else if (playerMove == 'papier' && computerMove == 'kamień') {
		printMessage('Wygrana gracza');
	}


if (playerMove == 'nieznany ruch') {
	printMessage('Nieważna runda, błędny ruch gracza');
}




