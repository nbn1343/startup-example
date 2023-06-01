const storedUsername = localStorage.getItem('username');

if (storedUsername) {
  const welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.textContent = 'Player: ' + storedUsername;
}

let movesNum;
let movescell = document.getElementById('movesnum');
let tiles = document.getElementsByClassName('Tile');
let emptyRow, emptyCol;
let scores = [];

function updateScoreboard() {
  const scoreboard = document.getElementById('scoreboard');
  scoreboard.innerHTML = '';

  scores.sort((a, b) => a.moves - b.moves); // Sort scores in ascending order

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `${score.playerName}: ${score.moves} moves`;
    scoreboard.appendChild(scoreElement);
  }
}

let checkPuzzleCompletion = function () {
  let isCompleted = true;
  for (let i = 0; i < 15; i++) {
    let correctRow = Math.ceil((i + 1) / 4);
    let correctCol = ((i + 1) % 4) || 4;
    let currentRow = parseInt(tiles[i].style.gridRow);
    let currentCol = parseInt(tiles[i].style.gridColumn);

    if (currentRow !== correctRow || currentCol !== correctCol) {
      isCompleted = false;
      break;
    }
  }

  if (isCompleted) {
    displayMessage('System', 'Congratulations! Puzzle completed.');
    saveScore(storedUsername, movesNum);
    updateScoreboard();
  }
};

function saveScore(playerName, moves) {
  let scoreData = JSON.parse(localStorage.getItem('scores')) || []; // Retrieve existing scores or initialize as empty array
  scoreData.push({ playerName, moves });
  localStorage.setItem('scores', JSON.stringify(scoreData));
}

function randomizePuzzle() {
  movesNum = 0;
  movescell.innerHTML = movesNum;
  [emptyRow, emptyCol] = [4, 4];
  let positions = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ];
  for (let i = 14; i >= 0; i--) {
    let r = Math.round(Math.random() * i);
    let poppedPos = positions.splice(r, 1);
    tiles[i].style.gridRow = poppedPos[0][0];
    tiles[i].style.gridColumn = poppedPos[0][1];
  }
  checkPuzzleCompletion();
}

function solvePuzzle() {
  movesNum = 0;
  movescell.innerHTML = movesNum;
  [emptyRow, emptyCol] = [4, 4];
  for (let i = 0; i < 15; i++) {
    tiles[i].style.gridRow = Math.ceil((i + 1) / 4);
    tiles[i].style.gridColumn = ((i + 1) % 4) || 4;
  }
  checkPuzzleCompletion();
}

function moveTile() {
  let thisRow = parseInt(this.style.gridRow);
  let thisCol = parseInt(this.style.gridColumn);

  if (Math.abs(emptyRow - thisRow) + Math.abs(emptyCol - thisCol) === 1) {
    this.style.gridRow = emptyRow;
    this.style.gridColumn = emptyCol;
    emptyRow = thisRow;
    emptyCol = thisCol;
    movesNum++;
    movescell.innerHTML = movesNum;
    checkPuzzleCompletion();
  }
}

for (let i = 0; i < 15; i++) {
  tiles[i].addEventListener('click', moveTile);
}

document.getElementById('newgame').addEventListener('click', randomizePuzzle);
document.getElementById('solveit').addEventListener('click', solvePuzzle);
randomizePuzzle();

const chatbox = document.querySelector('.chatbox');
const toggleChatButton = document.getElementById('toggleChat');
const chatContent = document.getElementById('chatboxContent');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

let chatVisible = false;

toggleChatButton.addEventListener('click', () => {
  chatVisible = !chatVisible;
  chatbox.style.display = chatVisible ? 'block' : 'none';
});

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (message !== '') {
    displayMessage('You', message);
    chatInput.value = '';
    simulateReply();
  }
}

function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${sender}: </strong>${message}`;
  chatContent.appendChild(messageElement);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function simulateReply() {
  const senders = ['Cookie', 'Alexa', 'Nathan', 'Bob', 'Jared', 'Donald', 'Austin'];
  const hardcodedMessages = [
    'Hi there!',
    'How are you doing today?',
    'What have you been up to lately?',
    'Nice weather we\'re having, isn\'t it?',
    'Do you have any fun plans for the weekend?',
    'I recently watched a great movie. Have you seen any good movies lately?',
    'What\'s your favorite type of music?',
    'I\'m really into cooking. Do you enjoy cooking as well?',
    'I\'m planning a trip to a new city. Any recommendations?',
    'I\'m a big fan of hiking. Do you have any favorite outdoor activities?',
    'What do you do for a living?',
    'Have you tried any new restaurants recently?',
    'Do you have any pets?',
    'I love reading books. Any book recommendations?',
    'What\'s the last concert you attended?',
    'I enjoy playing video games. Are you a gamer?',
    'I\'m thinking about starting a new hobby. Any suggestions?',
    'What\'s your favorite TV show?',
    'I love traveling. What\'s the most memorable trip you\'ve taken?',
    'Do you follow any sports teams?',
    'I\'m learning a new language. Have you ever tried learning a foreign language?',
    'Do you enjoy going to art galleries or museums?',
    'I\'m looking for new podcasts to listen to. Any recommendations?',
    'What\'s your go-to exercise or workout routine?',
    'I enjoy trying out new recipes. Do you have a favorite dish?',
  ];
  setInterval(() => {
    const randomSender = senders[Math.floor(Math.random() * senders.length)];
    const randomMessage = hardcodedMessages[Math.floor(Math.random() * hardcodedMessages.length)];
    displayMessage(randomSender, randomMessage);
  }, Math.random() * 4000 + 2000);
}


simulateReply();
