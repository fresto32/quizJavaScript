$(document).ready(function(){

   $('.question').prepend($('<h2>Here will go the question</h2>'));
   var score = 0;


// Question Constructor Function
function Question() {

	questionText = '';
	choiceOne = '';
	choiceTwo = '';
	choiceThree = '';
	choiceFour = '';
	answer = '';
}

// Setting up Questions
var questionOne = new Question ();
questionOne.questionText = 'How many letters are in the alphabet?';
questionOne.choiceOne = '2';
questionOne.choiceTwo = '3';
questionOne.choiceThree = '7';
questionOne.choiceFour = '27';
answer = '4';


var questionTwo = new Question ();
questionTwo.questionText = 'What is my name?';
questionTwo.choiceOne = 'T';
questionTwo.choiceTwo = 'A';
questionTwo.choiceThree = 'J';
questionTwo.choiceFour = 'Taj';
answer = '4';

var questionArray = [questionOne,questionTwo];

//Setting up Initial Constraints
$('.choices').hide();
$('.next-button').text('Start the Game');
$('.question').find($('h2')).hide();
$('.question').find($('p')).hide();

var questionCount = 0;
//Initializing when Game Commences
$('.next').on('click','button', function(){

//Question One

if (questionCount===0){
	$('.next-button').text('Next');

	$('.question').find($('h2')).text(questionOne.questionText);
	$('.question').find($('h2')).show();
	$('.question').find($('p')).show();


	$('.choice-one').text(questionOne.choiceOne);
	$('.choice-two').text(questionOne.choiceTwo);
	$('.choice-three').text(questionOne.choiceThree);
	$('.choice-four').text(questionOne.choiceFour);

	$('.choices').show();
	}

console.log(questionCount);

// Question Two
if (questionCount === 1) {

	$('.next-button').text('Next');

	$('.question').find($('h2')).text(questionTwo.questionText);
	$('.question').find($('h2')).show();
	$('.question').find($('p')).show();


	$('.choice-one').text(questionTwo.choiceOne);
	$('.choice-two').text(questionTwo.choiceTwo);
	$('.choice-three').text(questionTwo.choiceThree);
	$('.choice-four').text(questionTwo.choiceFour);

	$('.choices').show();



}

// Final
if (questionCount === 2) {

	$('.next-button').hide();

	$('.question').find($('h2')).text('Congratulations on Finishing the Test');
	$('.question').find($('h2')).show();
	$('.question').find($('p')).show();



}

});


$('.choices').on('click','button', function(){


	if (questionCount === 1){

		if ($(this).hasClass('choice-four')){

			$('.question').find($('h2')).text('Correct!');
			score++;
			$('.score').text('Score: ' + score+ '');

		} else {

			$('.question').find($('h2')).text('Incorrect!');
			$('.score').text('Score: ' + score+ '');

		}

		questionCount++;

		$('.choices').hide();

		
	}

		if (questionCount === 0){

		if ($(this).hasClass('choice-four')){

			$('.question').find($('h2')).text('Correct!');
			score++;
			$('.score').text('Score: ' + score+ '');

		} else {

			$('.question').find($('h2')).text('Incorrect!');
			$('.score').text('Score: ' + score+ '');

		}

		questionCount++;

		$('.choices').hide();

		


	}	



});




});

