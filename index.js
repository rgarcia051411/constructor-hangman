// require inquirer
var inquirer = require('inquirer');
var isLetter = require('is-letter');
// require exports
var Word = require('./word.js');

// set the maxListener 
require('events').EvenEmitter.prototype._maxListeners = 100;


var hangman = {
	wordBank = ["banana", "apple", "melon", "orange", "guava", "grapes"];
	guessesRemaining: 10,
	// empty array to hold guessed letters by the user, and checks if the letter has been guessed already
	guessedLetters:[],
	display:0,
	wordCurrent:null,

	// start game function.promt the user if ready to play.
	startGame: function(){
		// clears guessedLetters every new game.
		if(this.guessedLetters.length > 0){
			this.guessedLetters = [];
		}

		inquirer.prompt ([{
			type: "confirm",
			message: "Are you ready for Hangman?",
			name: "play"
		}]).then(function(answer){
			if(answer.play){
				this.newGame();
			} else{
				console.log("booooooooo");
			}
		})},

		// new game if player decided to play.
		newGame: function(){
			
		}

	}
}
