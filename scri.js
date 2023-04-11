const form = document.getElementById('form-container');
form.addEventListener('submit', handleSubmit);
const quiz=document.getElementById('quiz-container');
const quizSection=document.getElementById('quiz-section');
const quizForm = document.getElementById('quiz-form1');
const quizResults = document.getElementById('quiz-results');
const scoreText = document.getElementById('score');
const firstName = document.getElementById('fname').value;
	const lastName = document.getElementById('lname').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
function handleSubmit(event) {
	event.preventDefault();
form.style.display='none';
quizSection.style.display='block';
quiz.style.display='none';

}
quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const answers = ['b', 'b', 'b', 'c', 'b'];
    let score = 0;

    for (let i = 1 ;i <=answers.length; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!answer) {
            alert(`Please answer question ${i}`);
            return;
        }

        if (answer.value === answers[i - 1]) {
            score++;
        }
    }
console.log(score);
    scoreText.textContent = `${score}`;
    quiz.style.display='block';
    quizResults.style.display = 'block';
    quizForm.style.display='none';
});

	
