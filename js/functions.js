let rand_num1 = 0
let rand_num2 = 0
let x = 0
let o = 0

const getRand = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRand(1,10)
    rand_num2 = getRand(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!'),
        o+=1, 
        document.querySelector('#rightAnswers').innerHTML = o
    }    else {
            alert('Incorrect!'), 
            x+=1, 
        document.querySelector('#wrongAnswers').innerHTML = x
        }
    
    randomizeNumbers()
    document.querySelector('input').value=''


})