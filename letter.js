// Constructior function for guessed letters
var Letters = function(string,){
	this.string = "";
	this.isGuessed = true;
	// this.blackArr = [];

	// method that returns underlying character if the letter has been guessedor a place holder (like underscore) of the letter has not been guessed
	this.guessedLetters = function(string){
		
			
			
	
			for(var i = 0; i <= this.charsArray -1; i++){
				this.newCharArray = blankArray.push("_");
				console.log(newCharArray);
		
	// };

}

}


	// method that takes a character argumet and checks it against underlying character, updating and stored boolean value to true
	this.isGuessedLetters = function(string){
		if (guessedCharacter === charsArray){
			return this.isGuessed;
		}

	}
};

module.exports = Letters;

var guessedCharacter = process.argv[2];