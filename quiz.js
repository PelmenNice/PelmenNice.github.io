const quizImages = [
	'/quiz1.jpg',
	'/quiz2.jpg',
	'/quiz3.jpg',
	'/quiz4.jpg',
	'/quiz5.jpg',
	'/quiz6.jpg',
	'/quiz7.jpg',
	'/quiz8.jpg',
];

const answers = [
	true,
	true,
	false,
	false,
	true,
	true,
	false,
	false,
];

const phish = [0, 1, 4, 5];

let currentQuestion = 0;
let score = 0;

// Get the first image and span elements
var failImage1 = document.getElementById('fail-image1');
var failSpan1 = document.getElementById('fail-span1');

// Get the second image and span elements
var failImage2 = document.getElementById('fail-image2');
var failSpan2 = document.getElementById('fail-span2');

// Get the third image and span elements
var failImage3 = document.getElementById('fail-image3');
var failSpan3 = document.getElementById('fail-span3');

// Get the fourth image and span elements
var failImage4 = document.getElementById('fail-image4');
var failSpan4 = document.getElementById('fail-span4');


function loadQuestion() {
	if (currentQuestion < quizImages.length) {
		const quizImage = document.getElementById('quiz-image');
		quizImage.src = quizImages[currentQuestion];
	} else {
		showScore();
	}
}

function checkAnswer(isGood) {
	let isPhishing = phish.includes(currentQuestion)
	let isCorrect = isGood === answers[currentQuestion]
	console.debug(currentQuestion, isPhishing, isCorrect)
	if (isCorrect) {
		score++;
	} else if (isPhishing && !isCorrect) {
		switch (currentQuestion) {
			case 0:
				failImage1.hidden = false
				failSpan1.hidden = false
				break;
			case 1:
				failImage2.hidden = false
				failSpan2.hidden = false
				break;
			case 4:
				failImage3.hidden = false
				failSpan3.hidden = false
				break;
			case 5:
				failImage4.hidden = false
				failSpan4.hidden = false
				break;
			default:
				break;
		}
	}
	currentQuestion++;
	loadQuestion();
}

function showScore() {
	const quizContainer = document.getElementById('quiz-container');
	quizContainer.hidden = true;
	const scoreContainer = document.getElementById('score-container');
	scoreContainer.hidden = false;
	const scoreElement = document.getElementById('score');
	const totalQuestionsElement = document.getElementById('total-questions');
	scoreElement.textContent = score;
	totalQuestionsElement.textContent = quizImages.length;
}

document.addEventListener('DOMContentLoaded', () => {
	loadQuestion();
});