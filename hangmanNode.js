var prompt = require('prompt');

var wordSelected;
var underScores = [];
var guessedWord = [];
var letter;
var arr = [];
var wordArray = ["bowling", "basketball", "scuba diving", "athletics", "snow boarding", "handball", "swimming", "hockey", "car racing", "cycling", "table tennis", "jogging", "volleyball", "skiing", "horse racing", "softball", "golf", "baseball", "track and field", "rugby", "snow boarding", "gymnastics", "skin diving", "football", "tennis"];


// Random Shit for introduction here
console.log('**************************************************************');
console.log('**************************************************************');
console.log('');
console.log('');
console.log('Welcome To Hangman Game!');
console.log('Please guess the hidden word before hitting the missed limit!');
console.log('');
/*********************************************************************/

prompt.start();



function randomWord(){
	wordSelected = wordArray[Math.floor(Math.random()*wordArray.length)];
	wordSelected.split(' ');
}


function underscoreRender(word){
	for(var index = 0; index < wordSelected.length; index++){
		if(wordSelected[index] === ' '){
			underScores.push(' ');
		} else{
		underScores.push("_ ");
	}
	}
	console.log(underScores.join(" "));
}





String[] elements = { "a","a","a","a" };   
for (String s: elements) {           
        //Do your stuff here
        System.out.println(s); 
    }




randomWord();

underscoreRender();

console.log(wordSelected);




    

