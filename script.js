let random_number = parseInt(Math.random()*100+1);
 const userInput = document.querySelector('#guessField');
 const submit = document.querySelector('#subt');
 const guessedElements = document.querySelector('.guesses');
 const Remaining = document.querySelector('.LastResult')
 const lowOrHii = document.querySelector('.lowOrHi');
 const startOver = document.querySelector('.resultParas');

 let p = document.createElement('p');

 let prevGuess = [];
 let numOfGuess = 0;
 let playGame = true;

 if(playGame){
	submit.addEventListener('click', function(e){
		e.preventDefault();
		let guess = parseInt(userInput.value);
		console.log();
		validateGuess(guess);
	})
 }

 function validateGuess(guess){
	if(isNaN(guess)){
		alert(`please anter a valid number`);
	}
	else if(guess < 1){
		alert(`please enter a number greater than 1`);
	}
	else if(guess > 100){
		alert(`please enter a number less than 100`);
	}
	else{
		prevGuess.push(guess);
		if(numOfGuess === 11){
			cleanUpGuess(guess);
			displayMessage(`Game Over Random number was ${random_number}`)
			endGame();
		}
		else{
			cleanUpGuess(guess);
			checkguess(guess);
		}
	}
 }

 function checkguess(guess) {

	if(guess === random_number){
		displayMessage(`You guessed it !.... Correctly`)
		endGame();
	}
	else if( guess < random_number){
		displayMessage(`Number is too low`);
	}
	else if(guess > random_number){
		displayMessage('Number is too high');
	}
	
 }


 function cleanUpGuess(guess){
	userInput.value = '';
	guessedElements.innerHTML += `${guess}  `;
	numOfGuess++;
	Remaining.innerHTML = `${10 - numOfGuess}`

 }
 function displayMessage(message){
	lowOrHii.innerHTML = `${message}`;

 }

 function endGame(){
	userInput.value = '';
	userInput.setAttribute('disabled','');
	p.classList.add('button');
	p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
	startOver.appendChild(p);
	playGame = false;
	newGame();
 }

 function newGame(){
	const newGameButton = document.querySelector('#newGame');
	newGameButton.addEventListener('click' , function(e){
		random_number =  parseInt(Math.random()*100+1);
		prevGuess = [];
		numOfGuess = 0;
		guessedElements.innerHTML = '';
		Remaining.innerHTML = `${10 - numOfGuess}`
		userInput.removeAttribute('disabled');
		startOver.removeChild(p);
		playGame = true;
	})
	


 }