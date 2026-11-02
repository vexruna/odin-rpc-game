/* This is a game of rock paper scissors */
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");
const bombbtn = document.querySelector("#bombbtn");
const result_log = document.querySelector("#result_log");


let humanScore = 0;
let computerScore = 0;
let roundsplayed = 0;

function playGame(rounds) {
	if (roundsplayed == rounds) {
		let gameResult = "";
		roundsplayed = 0;
	if (humanScore === computerScore) {
		gameResult = "Game Over! You tied!";
	} else if (humanScore > computerScore) {
		gameResult = "Game Over! You won!";
	} else {
		gameResult = "Game Over! You lost!";	
	};
		const gamelog = document.createElement("p");
		gamelog.textContent = gameResult;
		while (result_log.firstChild) {result_log.removeChild(result_log.lastChild)};
		result_log.appendChild(gamelog);
	};
};


function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();
	let result = "";

	if (humanChoice === computerChoice) {
		result = "You tied!";
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		result = "Rock vs Paper! You lost!";
		computerScore += 1;
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		result = "Rock vs Scissors! You won!";
		humanScore += 1;
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		result = "Paper vs Rock! You won!";
		humanScore += 1;
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		result = "Paper vs Scissors! You lost!";
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		result = "Scissors vs Rock! You lost!";
		computerScore += 1;
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		result = "Scissors vs Paper! You won!";
		humanScore += 1;
	} else {
		result = "You don't know how to play this game.";
	}
	const resultp = document.createElement("p");
	resultp.textContent = result;
	result_log.appendChild(resultp);
	roundsplayed += 1;
	playGame(5);
	return result;
}

function getComputerChoice() {
	let cchoice = "";
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

function getHumanChoice(choice) {
	return choice;
}

rockbtn.addEventListener(`click`, () => {
	playRound("Rock", getComputerChoice());
});
paperbtn.addEventListener(`click`, () => {
	playRound("Paper", getComputerChoice());
});
scissorsbtn.addEventListener(`click`, () => {
	playRound("Scissors", getComputerChoice());
});
bombbtn.addEventListener(`click`, () => {
	playRound("Bomb", getComputerChoice());
});

