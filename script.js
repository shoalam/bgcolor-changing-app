const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'green', 'yellow', 'violet', 'magenta', 'purple'];

body.style.backgroundColor = "orange";

const changeBackgroundColor = () =>{
  const colorIndex = Math.floor(Math.random()*colors.length);
  body.style.backgroundColor = colors[colorIndex];
}

button.addEventListener('click', changeBackgroundColor);