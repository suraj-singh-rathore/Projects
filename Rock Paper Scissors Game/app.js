let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Draw. Play again.";
    msg.style.backgroundColor = "#af70c8ff";
}

 const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You Win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "#081b";
    } else {
        console.log("You Lose");
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
    }
 }

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice = ", computerChoice);

    if(userChoice === computerChoice) {
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
           userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //paper, rock
            computerChoice === "rock" ? false:true;
        }
        showWinner (userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});