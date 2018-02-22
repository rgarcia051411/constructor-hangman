var Letters = require('./letter.js');


var Word = function(word){
	this.word = word;
	this.charArray = [];
	this.currentWord = false;

	this.getLetter = function(){
		for (var i = 0; i < this.word.length; i++){
			var newLetter = new Letters(this.word[i]);
			this.charArray.push(newLetter);
		}
	}
	// generated current word
	this.wordFound = function(){
		if (this.charArray.every(function(letter){
			return letter.appear === true;
		})){
			this.currentWord = true;
			return true;
		}
	};

	this.ifLetterIsGuessed = function(guessedLetter){
		var toReturn = 0;
		// goes through each letter to check if it matches the guessed letter
		this.charArray.forEach(function(letter){
			if(letter.isGuessed === guessedLetter){
				letter.appear = true;
				toReturn++;
			}
		});
	// if guessLetter matches the letter, the letter object should show
		return toReturn;
	}

	this.WordGenerated = function(){
		var display = '';
		// generates a word if letter are found or not.
		this.charArray.forEach(function(letter){
			var currentLetter = letter.letterGuessed();
			display += currentLetter;
		})
		return display;
	};
};