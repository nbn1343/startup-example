let movesNum;
let movescell = document.getElementById("movesnum");
let tiles = document.getElementsByClassName("Tile");
let emptyRow, emptyCol;

let randomizePuzzle = function() {
  movesNum = 0;
  movescell.innerHTML = movesNum;
  [emptyRow, emptyCol] = [4, 4];
  let positions = [[1, 1], [1, 2], [1, 3], [1, 4], [2, 1], [2, 2], [2, 3], [2, 4], [3, 1], [3, 2], [3, 3], [3, 4], [4, 1], [4, 2], [4, 3], [4, 4]];
  for (let i = 14; i >= 0; i--) {
    let r = Math.round(Math.random() * i);
    let poppedPos = positions.splice(r, 1);
    tiles[i].style.gridRow = poppedPos[0][0];
    tiles[i].style.gridColumn = poppedPos[0][1];
  }
};

let solvePuzzle = function() {
  movesNum = 0;
  movescell.innerHTML = movesNum;
  [emptyRow, emptyCol] = [4, 4];
  for (let i = 0; i < 15; i++) {
    tiles[i].style.gridRow = Math.ceil((i + 1) / 4);
    tiles[i].style.gridColumn = ((i + 1) % 4) || 4;
  }
};

let moveTile = function() {
  let thisRow = parseInt(this.style.gridRow);
  let thisCol = parseInt(this.style.gridColumn);

  if (Math.abs(emptyRow - thisRow) + Math.abs(emptyCol - thisCol) === 1) {
    this.style.gridRow = emptyRow;
    this.style.gridColumn = emptyCol;
    emptyRow = thisRow;
    emptyCol = thisCol;
    movesNum++;
    movescell.innerHTML = movesNum;
  }
};

for (let i = 0; i < 15; i++) {
  tiles[i].addEventListener("click", moveTile);
}

document.getElementById("newgame").addEventListener("click", randomizePuzzle);
document.getElementById("solveit").addEventListener("click", solvePuzzle);
randomizePuzzle();