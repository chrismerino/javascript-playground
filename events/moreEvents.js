const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  const button = event.target;

  // Is event.target the same as event.currentTarget? NOOOU
  console.log(event.target);
  console.log(event.currentTarget);

  // Proves target and currentTarget are not the same thing!
  console.log(event.target === event.currentTarget);
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
