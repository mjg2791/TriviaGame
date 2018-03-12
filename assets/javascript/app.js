const panel = $("#quiz");

const questions = [{
	question: "How trick does Sally get away with not drinking the poison soup?",
	answers: ["Actually drinks unpoisined soup", "there are wholes in the spoon", "this never happened"],
	correctAnswer: "there are holes in the spoon"
}, {
	question: "Where does Sally keep her mending needle",
	answers: ["behind her ear", "in the hem of her skirt", "in her dress pocket"],
	correctAnswer: "behind her ear"
}, {
	question: "Which of these is not one of the Oogie's Trick-or-Treaters?",
	answers: ["Dark", "Lock", "Shock", "Barrel"],
	correctAnswer: "Dark"

}];

var timer;

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
	},

	start: function(){
		timer = setInterval(game.countdown, 900);
		$("#sub-wrapper").prepend('<h2> time left: <span id="counter-number"> 10</span> s</h2>');
		$("#start").remove();

		for (var i = 0; i < questions.length; i++) {
      		panel.append("<h2>" + questions[i].question + "</h2>");
      			for (var j = 0; j < questions[i].answers.length; j++) {
       				 panel.append("<input type='radio' name='question-" + i +
       				"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

	done: function() {
  		$.each($("input[name='question-0']:checked"), function(){ 
  			if ($(this).val() === questions[0].correctAnswer){
  			game.correct++;
  			}
  			else {
  			game.incorrect++;
  			}

		});

		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() === questions[1].correctAnswer){
  			game.correct++;
  			}
  			else {
  			game.incorrect++;
  			}

		});

		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() === questions[2].correctAnswer){
  			game.correct++;
  			}
  			else {
  			game.incorrect++;
  			}
		});

		this.result();
	},

	result: function() {
		clearInterval(timer);
		$("sub-wrapper h2").remove();

		panel.html("<h2> Finished!</h2>");
		panel.append("<h3> # Correct: " + this.correct + "</h3>");
    	panel.append("<h3># Incorrect: " + this.incorrect + "</h3>");
  		}
	};

	$(document).on("click", "start", function() {
		game.start();
	});

	$(document).on("click", "#done", function() {
  		game.done();
	});





















