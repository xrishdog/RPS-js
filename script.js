function getComputerChoice(){
	let rand = Math.floor(Math.random * 3 + 1);
	if (rand === 1) {
		return "rock";
	}

	else if (rand ===2){
		return "paper";
	}

	else{
		return "scissors";
	}

}


function playRound(playerSelection, computerSelection){

	playerSelection = playerSelection.toLowerCase();

	//computer chooses rock
	if (computerSelection === "rock"){
		if (playerSelection === "rock"){
			return "You draw! You both chose rock.";
		}
		else if (playerSelection === "paper") {
			return "You win! Paper beats rock";
		}

		else {
			return "You lose! Rock beats scissors";
		}
	}
	//computer chooses paper
	else if (computerSelection === "paper"){
		if (playerSelection === "paper"){
			return "You draw! You both chose paper.";
		}
		else if (playerSelection === "scissors") {
			return "You win! Scissors beats paper";
		}

		else {
			return "You lose! Paper beats rock";
		}
	}
	//computer chooses scissors
	else{
		if (playerSelection === "scissors"){
			return "You draw! You both chose scissors.";
		}
		else if (playerSelection === "rock") {
			return "You win! Rock beats scissors";
		}

		else {
			return "You lose! Scissors beats paper";
		}
	}
}