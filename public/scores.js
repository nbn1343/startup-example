const storedUsername = localStorage.getItem('username');

if (storedUsername) {
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.textContent = 'Player: ' + storedUsername;
}
const scoresText = localStorage.getItem('scores');
let scores = [];
if (scoresText) {
  scores = JSON.parse(scoresText);
}

const scoreboardTable = document.querySelector('table');
const scoreboardBody = scoreboardTable.querySelector('tbody');

function createScoreRow(position, playerName, moves) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="position">${position}</td>
    <td class="player">${playerName}</td>
    <td>${moves}</td>
  `;
  return row;
}

function updateScoreboard() {
  scoreboardBody.innerHTML = '';


  scores.sort((a, b) => b.moves - a.moves);


  scores.forEach((score, index) => {
    const { playerName, moves } = score;
    const position = index + 1;
    const scoreRow = createScoreRow(position, playerName, moves);
    scoreboardBody.appendChild(scoreRow);
  });
}

updateScoreboard();
