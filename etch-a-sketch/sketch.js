// Select elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

// Getting the Context from the Canvas
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 30;
const LINE_WIDTH = 30;

// Generate random width and heigth values
// Make a variable from the same properties on our canvas
const { width, height } = canvas;

// Create random X and Y starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Setup canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = LINE_WIDTH;

// Need to randomize the initial dot
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  // Increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);

  // Move our X and Y values

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for keys
function handleKey(event) {
  if (
    event.key === 'ArrowUp' ||
    event.key === 'ArrowDown' ||
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight'
  ) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// Clear / Shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);

  // Listening to the animation end
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);

// aaaaaand is done! Yay!
