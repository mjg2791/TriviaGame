const panel = $("#quiz-area");

const questions = [{
	question: "How trick does Sally get away with not drinking the poison soup?",
	answers: ["Actually drinks unpoisined soup", "there are wholes in the spoon", "this never happened"]
	correctAnswer: "there are wholes in the spoon"
}, {
	question: "Where does Sally keep her mending needle",
	answers: ["behind her ear", "in the hem of her skirt", "in her dress pocket"],
	correctAnswer: "behind her ear"
}, {
	question: "Which of these is not one of the Oogie's Trick-or-Treaters?",
	answers: ["Dark", "Lock", "Shock", "Barrel"]
	correctAnswer: "Dark"

}];

const timer;

const game = {

	correct: 0, 
	incorrect: 0,
	counter: 60,

	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);
		if(game-counter === 0) {
			console.log("time is up!");
			game.done();
		}
	}





}