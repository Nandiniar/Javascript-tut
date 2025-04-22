const randomNumber=parseInt(Math.random()*100+1);

console.log(parseInt(Math.random()*100+1));

const submit=document.querySelector('#subt')
console.log(submit)
const userInput=document.querySelector('#guessField')
console.log(userInput)
const guesen=document.querySelector('.guesses'); // here . is used for class
console.log(guesen)
const lastr=document.querySelector('.lastResult');
console.log(lastr)

const loworhigh=document.querySelector('.lowOrHii')
console.log(loworhigh)

const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');
console.log(p)

let prevGuess=[]

let numGuess=1
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);

   console.log(guess);
   validateGuess(guess)
    })
}
function validateGuess(guess){ // yeh bas check karega for ex number 1 and 100 ke bich me hai ya nhi
if(isNaN(guess)){
    alert('Please enter a valid number')
}
else if(guess<1){
    alert('Please enter a greater than 1')
}
else if(guess>100){
    alert('Please enter a number less than 100')
}
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over.Random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guesses it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is Too low`)
    }
    else if(guess<randomNumber){
        displayMessage(`Number is Too high`)
    }

}
function displayGuess(guess){
 userInput.value=''
 guessSlot.innerHTML +=`${guess}`
 numGuess++
 remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){ // this will interact with dom
loworhigh.innerHTML=`<h2>${message}</h2>`;
}

function newGame(){
//loworhigh=`<h2>${message}</h2>`
}
function endGame(){

}
