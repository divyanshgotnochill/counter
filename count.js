const tapButton = document.querySelector('.tapper');
const resetButton = document.querySelector('.reset');
const counter = document.querySelector('.counter');
const score = document.querySelector('.score');

let savedScore = parseInt(localStorage.getItem('myNum') || 0);
score.textContent = savedScore;

let count = 100;
counter.textContent = count;


tapButton.addEventListener('click', function(){
    savedScore++;
    count++;
    counter.textContent = count;
    score.textContent = savedScore;
    
})

resetButton.addEventListener('click', function(){

    localStorage.setItem('myNum', savedScore);
    count = 0;
    counter.textContent = count
})