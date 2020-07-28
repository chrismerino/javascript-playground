const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
  console.log('It got clickeeed!');
}

// Bindings
butts.addEventListener('click', handleClick);
cool.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);
