const btn = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'black', 'yellow', 'green', 'blue', 'purple']

body.style.background = '#18122B'
btn.addEventListener('click', changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.background = colors[colorIndex];
}