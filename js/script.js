function game(){
    startRound()
}

function startRound(){
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
    playRound(playerChoice, computerChoice)
}

function getPlayerChoice(){
    while(true){
        let playerChoice = prompt("Would you like to choose Rock, Paper, Or Scissors?")
        playerChoice=playerChoice.toLowerCase()
        if(playerChoice=="scissors"){
            playerChoice=1
            return playerChoice
        } 
        if(playerChoice=="paper"){
            playerChoice=2
            return playerChoice
        }
        if(playerChoice=="rock"){
            playerChoice=3
            return playerChoice
        }
    }
    
}

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)+1
    console.log("Random Number: "+ computerChoice)
    return computerChoice
}

function playRound(playerChoice,computerChoice){
    if(playerChoice==computerChoice) console.log("It's a tie!")
    else if((playerChoice==1 && playerChoice==2) || (playerChoice==2 && computerChoice==3) || (playerChoice==3 && computerChoice==1)) console.log("You Win!")
    else { 
        console.log("Computer Wins!")
    }

    console.log("Player Choice: " + playerChoice)
    console.log("Computer Choice: "+computerChoice)
}

game()

//1. scissors
//2. paper
//3. rock