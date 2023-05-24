// Get the username input element
const usernameInput = document.getElementById('username');

// Add an event listener to the form submission
document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the username value
  const username = usernameInput.value;

  // Store the username in the localStorage
  localStorage.setItem('username', username);

  // Redirect the user to the play.html page
  window.location.href = 'play.html';
});