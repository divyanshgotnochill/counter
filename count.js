const tapButton = document.querySelector('.tapper');
const resetButton = document.querySelector('.reset');
const counter = document.querySelector('.counter');
const score = document.querySelector('.score');

let savedScore = parseInt(localStorage.getItem('myNum') || 0);
score.textContent = savedScore;

let count = 0;
counter.textContent = count;


tapButton.addEventListener('click', function(){
    
    count++;
    counter.textContent = count;
})

resetButton.addEventListener('click', function(){

    savedScore+=count;
    localStorage.setItem('myNum', savedScore);

    score.textContent = savedScore;

    count = 0;
    counter.textContent = count
})