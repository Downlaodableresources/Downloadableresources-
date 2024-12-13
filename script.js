const canvas = document.getElementById('shapeCanvas');
const ctx = canvas.getContext('2d');
const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
let score = 0;

canvas.width = 200;
canvas.height = 200;

const shapes = ['Circle', 'Square', 'Triangle', 'Rectangle'];
let currentShape;

function drawShape() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentShape = shapes[Math.floor(Math.random() * shapes.length)];
  if (currentShape === 'Circle') {
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();
  } else if (currentShape === 'Square') {
    ctx.fillRect(50, 50, 100, 100);
  } else if (currentShape === 'Triangle') {
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.lineTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.fill();
  } else if (currentShape === 'Rectangle') {
    ctx.fillRect(50, 70, 100, 50);
  }
}

options.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === currentShape) {
      score++;
      alert('Correct!');
    } else {
      alert('Wrong! Try again.');
    }
    scoreDisplay.textContent = `Score: ${score}`;
    drawShape();
  });
});

drawShape();
