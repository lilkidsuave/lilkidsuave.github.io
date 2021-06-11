let userScore = 0;
let computerScore = 0;
let tieScore = 0;
const userScore_span = document.getElementById("user-score");
const tieScore_span = document.getElementById("tie-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
function convertToWord(letter)
{
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  if (letter === "p") return "Paper";


}
function getComputerChoice() {
  const choices = ['r', 'p' , 's'];
  const randomNumber = Math.floor (Math.random() * 3);
  return choices[randomNumber];
}
function win(userChoice, computerChoice)
{
userScore++;
console.log("win")
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
tieScore_span.innerHTML = tieScore;
const smallUserWord = "user".fontsize(3).sub();
const smallComputerWord = "computer".fontsize(3).sub();
const userChoice_div = document.getElementById(userChoice)
result_p.innerHTML = convertToWord(userChoice)  + smallUserWord + " beats " + convertToWord(computerChoice) + smallComputerWord + ". You win! "
userChoice_div.classList.add('green-glow');
userScore_span.classList.add('green-glow-score');
setTimeout(function(){ userChoice_div.classList.remove('green-glow')}, 500);
setTimeout(function(){ userScore_span.classList.remove('green-glow-score')}, 500);
}
function lose(userChoice, computerChoice){
computerScore++
console.log("lose")
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
tieScore_span.innerHTML = tieScore;
const smallUserWord = "user".fontsize(3).sub();
const smallComputerWord = "computer".fontsize(3).sub();
const userChoice_div = document.getElementById(userChoice)
result_p.innerHTML = convertToWord(computerChoice) + smallComputerWord +" beats " + convertToWord(userChoice) + smallUserWord + ". You lose! "
userChoice_div.classList.add('red-glow');
computerScore_span.classList.add('red-glow-score');

setTimeout(function(){ computerScore_span.classList.remove('red-glow-score')}, 500);

setTimeout(function(){ userChoice_div.classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice) {
tieScore++
console.log("Tie")
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
tieScore_span.innerHTML = tieScore;

const smallUserWord = "user".fontsize(3).sub();
const smallComputerWord = "computer".fontsize(3)
const userChoice_div = document.getElementById(userChoice)

result_p.innerHTML = convertToWord(computerChoice) + smallComputerWord +" equals " + convertToWord(userChoice) + smallUserWord + ". It's a Tie! "
userChoice_div.classList.add('yellow-glow');
tieScore_span.classList.add('yellow-glow-score');
setTimeout(function(){ tieScore_span.classList.remove('yellow-glow-score')}, 500);

setTimeout(function(){ userChoice_div.classList.remove('yellow-glow')}, 500);
}

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice,computerChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice,computerChoice);
    break;
  case "rr":
  case "ss":
  case "pp":
    draw(userChoice,computerChoice)
    break;
}

}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}
main();





