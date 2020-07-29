const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button!');
  const button = event.target;

  // Is event.target the same as event.currentTarget? NOOOU
  console.log(event.target);
  console.log(event.currentTarget);

  // Proves target and currentTarget are not the same thing!
  console.log(event.target === event.currentTarget);

  // Stops the propagation
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function(e) {
  console.log(this);
});
