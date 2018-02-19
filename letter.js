// var require = require ()



// // Constructior function for guessed letters
// var Letters = function(character){
// 	this.character = "";
// 	this.blackArr = [];
// 	this.isGuessed = false;

// 	// method that returns underlying character if the letter has been guessedor a place holder (like underscore) of the letter has not been guessed
// 	this.guessedLetters = function(){
		
// 	}else if(!this.isGuessed){
// 		for(var i = 0; i < answerLetters.length; i++){

// 		}
// 	}



// 	// method that takes a character argumet and checks it against underlying character, updating and stored boolean value to true
// 	this.isGuessedLetters = function(){

// 	}
// }

// var letter = new Letters
// var guess = new Letter(process.argv[2]);


var Fruits = function(){
	this.words = ["banana", "apple", "grapes", "orange", "mango"]
	console.log(this.words);
	// 
	this.randonWord = function(){
		this.randomItem = this.words[Math.floor(Math.random()*this.words.length)];
		console.log(this.randomItem);

	}
	// this function will slpit the randomWord strin by character.
	var blackArr = [];
	this.worCharArr = function(){
		this.charsArr = randomItem.split('');
		console.log(this.charsArr);
		for (var i = 0; i <=charsArr.length - 1; i++){
			var newArr = blackArr.push("_")
			
			
		}
		console.log(blackArr);
	}


};

Fruits();
randonWord();
worCharArr();

