// const arr = [5, 2, 5];
// let sum = 0;
// function add () {
//     arr.forEach(value => {
//         sum += value;
//     });
//     return sum;
// }

// console.log("Sum of element is: ",add());


const answerParag = document.querySelector('.js-answer')

answerParag.style.display = "none";

function showAnswer () {
    document.querySelector('.js-show-answer').addEventListener('click', () => {
        answerParag.style.display = "block";
    })
}

showAnswer();



