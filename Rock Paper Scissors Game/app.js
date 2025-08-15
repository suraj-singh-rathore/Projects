let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw. Play again.";
    msg.style.backgroundColor = "#af70c8ff";
}

 const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lost. ${computerChoice} beats Your ${userChoice}`;
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
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner (userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});