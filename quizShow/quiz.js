$(document).ready(function(){


//Setting up Initial Constraints
	var questionDiv = $('.question');
	var questionLabel = questionDiv.find($('h2'));
	var choicesDiv = $('.choices');
	choicesDiv.hide();
	var choiceOneT = choicesDiv.find($('.choice-one'));
	var choiceTwoT = choicesDiv.find($('.choice-two'));
	var choiceThreeT = choicesDiv.find($('.choice-three'));
	var choiceFourT = choicesDiv.find($('.choice-four'));



	var nextButton = $('.next-button');

	nextButton.text('Start the Game!');
	var score = 0;
	var scoreLabel = $('.score');
	var questionCount = 0;


//Initializing JSON Objects from questionBank
$.getJSON('questionBank.json', function(response){
        questionBankArray = response;

			$.each(questionBankArray.questionBank, function(index, item) {
			    item.htmlFormatter = function(index, item){
			    	questionLabel.text(this.questionText);
			    	choiceOneT.text(this.choiceOne);
			    	choiceTwoT.text(this.choiceTwo);
			    	choiceThreeT.text(this.choiceThree);
			    	choiceFourT.text(this.choiceFour);

				};
		});
	});

$('.next').on('click','button', function(){

	
	if(questionCount<questionBankArray.questionBank.length){
		choicesDiv.show();
		questionBankArray.questionBank[questionCount].htmlFormatter();
		nextButton.hide();
		
	} else {

		questionLabel.text('You finished the test with a score of ' + score);
		nextButton.hide();

	}

});

$('.choices').on('click','button', function(){

	if ($(this).hasClass(questionBankArray.questionBank[questionCount].answer)) {

		questionLabel.text('Correct!!');
		score++;

	} else {

		questionLabel.text('Wow... Youre stupid');

	}

questionCount++;

nextButton.show().text('Next Question');

	if(questionCount===questionBankArray.questionBank.length-1){
		
		nextButton.text('Final Question');
	
	} else if(questionCount===questionBankArray.questionBank.length) {

		nextButton.text('Results');

	}

scoreLabel.text('Score: '+score);

choicesDiv.hide();


});






});












