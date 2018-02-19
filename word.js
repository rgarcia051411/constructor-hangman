var fss = require("fs");
var Letter = require("./letter.js");

var Word = function(){
	this.words = ["banana", "apple", "grapes", "orange", "mango"]
	this.blankArray=[];
	this.word = function(){
		var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
		console.log(randomWord);
		var charsArray = randomWord.split('');
		console.log(charsArray);
		
	
	}
	word();
};
Word();