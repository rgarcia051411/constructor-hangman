// Constructior function for guessed letters
var Letters = function(char){
	// property to hold a character value
	this.char = char;
	// property if the letter is guessed and shows
	this.isGuessed = false;
	

	// method that returns underlying character if the letter has been guessedor a place holder (like underscore) of the letter has not been guessed
	this.letterGuessed = function(){
		if (this.char === ' '){
			this.isGuessed = true;
			console.log(' ');
		} if (this.isGuessed === false){
			console.log('_');

		} else{
			console.log(this.char);
		}
	};
};

// export to word.js
module.exports = Leters;