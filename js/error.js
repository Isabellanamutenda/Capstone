/* eslint no-unused-vars: 0 */
function error(message, color) {
  if (message == null) {
    message = 'Links not working, this is just a demo!';
    color = 'red';
  }
  const error = document.createElement('aside');
  const parent = document.getElementById('menu-top');
  error.textContent = message;
  error.id = 'error-popup';
  error.classList.add(color);
  setTimeout(() => {
    error.classList.add('fade');
  }, 500);
  parent.appendChild(error);
  setTimeout(() => {
    parent.removeChild(document.getElementById('error-popup'));
  }, 3500);
}
