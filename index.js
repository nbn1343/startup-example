
const usernameInput = document.getElementById('username');

document.querySelector('form').addEventListener('submit', function(event) {

  event.preventDefault();

  const username = usernameInput.value;

  localStorage.setItem('username', username);

  window.location.href = 'play.html';
});