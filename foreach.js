// const arr = [5, 2, 5];
// let sum = 0;
// function add () {
//     arr.forEach(value => {
//         sum += value;
//     });
//     return sum;
// }

// console.log("Sum of element is: ",add());

const questionArr = ['What is capital city of Rwanda?', 'In which continent does China belongs?', 'Who is the president of Rwanda?'];

const answerArr = ['Kigali', 'Asia', 'Kagame Paul'];

const answerParag = document.querySelector('.js-answer');
const qnParag = document.querySelector('.js-question');
const showButton = document.querySelector('.js-show-answer')

answerParag.style.display = "none";
qnAnswerIndex = 0;

function showAnswer () {
    showButton.addEventListener('click', () => {
        answerParag.innerHTML = `${answerArr[qnAnswerIndex]}`;

        if (showButton.innerHTML === 'Show Answer') {
            answerParag.style.display = "block";
            showButton.innerHTML = 'Hide Answer';
        }
        else {
            answerParag.style.display = "none";
            showButton.innerHTML = 'Show Answer';
        }
    })
}

document.querySelector('.js-next-qn').addEventListener('click', () => {
    qnAnswerIndex++;
    qnParag.innerHTML = `${questionArr[qnAnswerIndex]}`;
    answerParag.style.display = "none";
    showButton.innerHTML = 'Show Answer';
});

document.querySelector('.js-prev-qn').addEventListener('click', () => {
    qnAnswerIndex--;
    qnParag.innerHTML = `${questionArr[qnAnswerIndex]}`;
    answerParag.style.display = "none";
    showButton.innerHTML = 'Show Answer';
});
showAnswer();





