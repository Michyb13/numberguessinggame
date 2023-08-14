const guessInput = document.getElementById("guess-input")
const submitBtn = document.getElementById("submit-btn")
const previousGuesses = document.getElementById("previous-guess")
const remainingGuesses = document.getElementById("remain-guess")
const highOrLow = document.getElementById("high-or-low")
let guesses = []
let randomNumber = Math.floor(Math.random()*100)+1
let numOfGuesses = 1
let playGame =true
const restart = document.getElementById("new-game")

submitBtn.addEventListener("click", function(){
    validate(guessInput.value)
    
})








function renderGuess(){
    let tries =""
    for(let i=0; i< guesses.length; i++){
        tries += ` ${guesses[i]}, `
    }
    previousGuesses.innerHTML = tries
    numOfGuesses++
    remainingGuesses.innerHTML = ` ${11-numOfGuesses}`
    
}


function checkGuess(guess){
    if(guess == randomNumber){
        highOrLow.innerHTML =`You Win! That's the correct number.`
        endGame()
        
    }else if(guess > randomNumber){
        highOrLow.innerHTML = `Too High! Try Again.`
        
    }else if (guess < randomNumber){
        highOrLow.innerHTML = `Too Low! Try Again.`
       
    }
}

function validate(guess){
    if(guess === ""|| guess === 0){
        alert("Enter Valid Input!")
    }else if(guess > 100){
        alert("Value is too big!")
    }else{
        guesses.push(guess)
    }
    if(numOfGuesses === 11){
        renderGuess()
        highOrLow.innerHTML =`Game Over! Correct Number was ${randomNumber}`
        endGame()
    }else{
        renderGuess()
        checkGuess(guess)
    }
    console.log(randomNumber)
    
}


function endGame(){
    guessInput.value=""
    guessInput.setAttribute("disabled", "")
    submitBtn.setAttribute("disabled", "")
    playGame = false
    restart.innerHTML = `Restart`
  
    
}
restart.addEventListener("click", function(){
    guessInput.value =""
    guesses =[]
    playGame =true
    numOfGuesses = 1
    remainingGuesses.innerHTML = ""
    highOrLow.innerHTML =""
    randomNumber = Math.floor(Math.random()*100)+1
    remainingGuesses.innerHTML= `${11-numOfGuesses}`
    previousGuesses.innerHTML = ""
    guessInput.removeAttribute("disabled", "")
    submitBtn.removeAttribute("disabled", "")
    restart.innerHTML= ""

    
})









