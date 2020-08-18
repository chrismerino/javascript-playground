const turtle = document.querySelector('.turtle');
const turtleSpeed = 50;
let x = 0;
let y = 0;
let flipped = false;
let rotate = 0;

function handleKeyDown(event) {
  if (!event.key.includes('Arrow')) return;
  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      rotate = -90;
      break;

    case 'ArrowDown':
      y += 1;
      rotate = 90;
      break;

    case 'ArrowLeft':
      x -= 1;
      flipped = true;
      rotate = 0;
      break;

    case 'ArrowRight':
      x += 1;
      flipped = false;
      rotate = 0;
      break;

    default:
      console.log('That is not a valid move');
      break;
  }
  console.log(x, y);
  turtle.setAttribute(
    'style',
    `
    --rotateX: ${flipped ? '180deg' : '0'};
    --x: ${x * turtleSpeed}px; 
    --y: ${y * turtleSpeed}px;
    --rotate: ${rotate}deg;
    `
  );
}

window.addEventListener('keydown', handleKeyDown);
