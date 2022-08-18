let playerScoreNumber=0
let computerScoreNumber=0

//1-rock 2-paper 3-scissors
function playGame(playerChoice){
    let computerChoice=getComputerChoice()
    if(playerChoice==computerChoice){
        displayChoice(computerChoice,playerChoice)
        displayTie()
    }
    else if(playerChoice==1 && computerChoice==2){
        addComputerScore()
        displayWinner('Computer')
        displayChoice(computerChoice, playerChoice)
    }
    else if(playerChoice==2 && computerChoice==3){
        addComputerScore()
        displayWinner('Computer')
        displayChoice(computerChoice, playerChoice)
    }
    else if(playerChoice==3 && computerChoice==1){
        addComputerScore()
        displayWinner('Computer')
        displayChoice(computerChoice, playerChoice)
    } 
    else {
        addPlayerScore()
        displayWinner('Player')
        displayChoice(computerChoice, playerChoice)
    }
}

function handleHover(hovered,selection){
    const userSelection=document.querySelector('div.choiceBox.'+selection)
    if(hovered) userSelection.classList.add('hovered')
    else userSelection.classList.remove('hovered')
}

function getComputerChoice(){
    const rndInt = Math.floor(Math.random() * 3) + 1
    return rndInt
    
}

function addPlayerScore(){
    const playerScore = document.getElementById('playerScore')
    playerScoreNumber++
    playerScore.textContent=playerScoreNumber.toString()
}

function addComputerScore(){
    const computerScore = document.getElementById('computerScore')
    computerScoreNumber++
    computerScore.textContent=computerScoreNumber.toString()
}

function displayWinner(winner){
    const announceWinner = document.getElementById('announceWinner')
    announceWinner.textContent=winner.toString() + " Wins!"
}

function displayTie(){
    const announceWinner = document.getElementById('announceWinner')
    announceWinner.textContent="It's a tie!"
}

function displayChoice(computerChoice, playerChoice){
    if(playerChoice==1) playerChoice='Rock'
    if(playerChoice==2) playerChoice='Paper'
    if(playerChoice==3) playerChoice='Scissors'

    playerChoiceDisplay=document.getElementById('playerChoice')
    playerChoiceDisplay.textContent=playerChoice.toString()

    if(computerChoice==1) computerChoice='Rock'
    if(computerChoice==2) computerChoice='Paper'
    if(computerChoice==3) computerChoice='Scissors'

    computerCoiceDisplay=document.getElementById('computerChoice')
    computerCoiceDisplay.textContent=computerChoice.toString()
}