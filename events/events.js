const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// Using a regular function
function handleClick() {
  console.log('It got clickeeed!');
}

// Now using an arrow function
const hooray = () => console.log('HOORAY!');

// Bindings
butts.addEventListener('click', hooray);
cool.addEventListener('click', handleClick);

// Unbinding the elements
butts.removeEventListener('click', hooray);

function buyItem() {
  console.log('Buying items...');
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', buyItem);
});
