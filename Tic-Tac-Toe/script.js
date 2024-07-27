let boxes = document.querySelectorAll(".box");
let para = document.querySelector(".winner-name");
let winnerBox = document.querySelector(".winner-view");
let newGame = document.querySelector(".new-game");
let mainBox = document.querySelector(".main-box");
let resetButton = document.querySelector("#reset-button");
let cross = true;
const winBoxes = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
winnerBox.classList.add("new-winner-view");
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (cross) {
      box.innerText = "X";
      cross = false;
    } else {
      box.innerText = "O";
      cross = true;
    }
    count++;
    box.disabled = true;
    checkWinner(count);
  });
});

const checkWinner = (count) => {
  for (let box of winBoxes) {
    let first = boxes[box[0]].innerText;
    let second = boxes[box[1]].innerText;
    let third = boxes[box[2]].innerText;
    if (count != 9) {
      if (first != "" && second != "" && third != "") {
        if (first === second && second === third) {
          viewWinner(first);
        }
      }
    } else {
      viewWinner(count);
    }
  }
};

const viewWinner = (winner) => {
  mainBox.classList.add("new-winner-view");
  winnerBox.classList.remove("new-winner-view");
  if (winner === 9) {
    para.innerText = "The match is draw";
  } else {
    para.innerText = `The winner is ${winner}`;
  }
};
const startNew = () => {
  cross = true;
  winnerBox.classList.add("new-winner-view");
  mainBox.classList.remove("new-winner-view");
  enableButton();
};

const enableButton = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};
const resetNew = () => {
  enableButton();
};

newGame.addEventListener("click", startNew);

resetButton.addEventListener("click", resetNew);
