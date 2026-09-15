/* This is a game of rock paper scissors */

const playButton = document.getElementById("playButton");
const newGameButton = document.getElementById("newGameButton");
const input = document.getElementById("mychoice");
const result_log = document.getElementById("GameResult");

let humanScore = 0;
let computerScore = 0;

function playGame(rounds) {
	for (let i = 1; i <= rounds; i++) {
		let round_result = playRound(getHumanChoice(), getComputerChoice());
		console.log("Round: " + i);
		console.log(round_result);
	}
	let gameResult = "";
	if (humanScore === computerScore) {
		gameResult = "Game Over! You tied!";
	} else if (humanScore > computerScore) {
		gameResult = "Game Over! You won!";
	} else {
		gameResult = "Game Over! You lost!";
	}
	console.log(gameResult + "\n" + humanScore + " : " + computerScore);
}

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();
	let result = "";

	if (humanChoice === computerChoice) {
		result = "You tied!";
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		result = "You lost!";
		computerScore += 1;
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		result = "You won!";
		humanScore += 1;
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		result = "You won!";
		humanScore += 1;
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		result = "You lost!";
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		result = "You lost!";
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		result = "You won!";
		humanScore += 1;
	} else {
		result = "You don't know how to play this game.";
	}
	return result;
}

function getComputerChoice() {
	let result = "";
	let choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			result = "Rock";
			break;
		case 1:
			result = "Paper";
			break;
		case 2:
			result = "Scissors";
			break;
		default:
			result = "I don't know how to play this game";
			console.log(result);
			break;
	}
	return result;
}

function getHumanChoice() {
	let choice = prompt("Rock, Paper, Scissors!", "");
	return choice;
}

playButton.addEventListener("click", () => {
	let input_value = input.value;
	let round_result = playRound(input_value, getComputerChoice());
	input_value = "";

	let p = document.createElement("p");
	p.textContent = round_result;

	result_log.appendChild(p);
});
newGameButton.addEventListener("click", () => {
	while (result_log.lastChild) {
		result_log.removeChild(result_log.lastChild);
	}
});
