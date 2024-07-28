let stone = document.querySelector(".first-icon");
let paper = document.querySelector(".second-icon");
let scissors = document.querySelector(".third-icon");
let result = document.querySelector(".result");
let userScore = document.querySelector(".user-count");
let compScore = document.querySelector(".comp-count");

let userCount = 0;
let computerCount = 0;
let options = ["stone", "paper", "scissors"];

const chooseResult = (userResult) => {
  let computerResult = options[Math.floor(Math.random() * options.length)];
  declareResult(userResult, computerResult);
};

const declareResult = (userResult, computerResult) => {
  let count;
  if (userResult === computerResult) {
    result.innerText = "It is a draw";
    count = 2;
  } else if (
    (userResult === "stone" && computerResult === "scissors") ||
    (userResult === "paper" && computerResult === "stone") ||
    (userResult === "scissors" && computerResult == "paper")
  ) {
    result.innerText = "User wins";
    count = 0;
  } else {
    result.innerText = "Computer wins";
    count = 1;
  }
  changeCount(count);
};

const changeCount = (c) => {
  if (c === 0) {
    userCount++;
    userScore.innerText = userCount;
  } else if (c === 1) {
    computerCount++;
    compScore.innerText = computerCount;
  }
};

stone.addEventListener("click", () => chooseResult(options[0]));
paper.addEventListener("click", () => chooseResult(options[1]));
scissors.addEventListener("click", () => chooseResult(options[2]));
