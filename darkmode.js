let lampada = document.querySelector('.lampada-on')
let boardContainer = document.querySelector('#board-container')
const body = document.body;

lampada.addEventListener('click', () => {

    body.classList.toggle('dark-mode');
  });

