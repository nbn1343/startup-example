// Retrieve the scores from localStorage
const scoresText = localStorage.getItem('scores');
let scores = [];
if (scoresText) {
  scores = JSON.parse(scoresText);
}

// Update the scoreboard table
const scoreboardTable = document.querySelector('table');
const scoreboardBody = scoreboardTable.querySelector('tbody');

// Function to generate a row in the scoreboard table
function createScoreRow(position, playerName, moves) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="position">${position}</td>
    <td class="player">${playerName}</td>
    <td>${moves}</td>
  `;
  return row;
}

// Function to update the scoreboard table with the scores
function updateScoreboard() {
  // Clear the existing rows
  scoreboardBody.innerHTML = '';

  // Sort the scores in descending order based on moves
  scores.sort((a, b) => b.moves - a.moves);

  // Add the scores to the scoreboard table
  scores.forEach((score, index) => {
    const { playerName, moves } = score;
    const position = index + 1;
    const scoreRow = createScoreRow(position, playerName, moves);
    scoreboardBody.appendChild(scoreRow);
  });
}

// Call the function to initially update the scoreboard
updateScoreboard();
