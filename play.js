document.addEventListener('DOMContentLoaded', function () {
    let tiles = Array.from(document.querySelectorAll('.tile-game p'));
    let startButton = document.querySelector('.start-button');
    let restartButton = document.querySelector('.restart-button');
    let quitButton = document.querySelector('.quit-button');
    let timeBox = document.querySelector('.time-box');
    let chatInput = document.querySelector('.input-group input');
    let chatButton = document.querySelector('.input-group button');
    let chatbox = document.querySelector('.chatbox');