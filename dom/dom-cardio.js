// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two three" in them
const listItem1 = document.createElement('li');
listItem1.textContent = 'One';

const listItem2 = document.createElement('li');
listItem2.textContent = 'Two';

const listItem3 = document.createElement('li');
listItem3.textContent = 'Three';

list.insertAdjacentElement('afterbegin', listItem1);
list.insertAdjacentElement('afterbegin', listItem2);
list.insertAdjacentElement('afterbegin', listItem3);

// put that list into the above wrapper

list.classList.add('wrapper');

document.body.appendChild(list);

// create an image

const newImg = document.createElement('img');

// set the source to an image
newImg.src = 'https://source.unsplash.com/random/600x600';

// set the width to 250
newImg.width = 250;

// add a class of cute
newImg.classList.add('cute');

// add an alt of Cute Puppy
newImg.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(newImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTMLString = `
  <div><p>First, </p><p>Second.</p></div>
`;

// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', myHTMLString);

// add a class to the second paragraph called warning
const newDiv = list.previousElementSibling;
newDiv.lastElementChild.classList.add('warning');

// remove the first paragraph
newDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `<div class="playerCard">
          <h2>${name} - ${age}</h2>
          <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
          </div>`;
}

// make a new div with a class of cards

const divCards = document.createElement('div');
divCards.classList.add('cards');

// Have that function make 4 cards
function makeACard() {
  const card1 = document.createElement('p');
  card1.textContent = `I'm card 1`;

  const card2 = document.createElement('p');
  card2.textContent = `I'm card 2`;

  const card3 = document.createElement('p');
  card3.textContent = `I'm card 3`;

  const card4 = document.createElement('p');
  card4.textContent = `I'm card 4`;

  // append those cards to the div
  divCards.appendChild(card1);
  divCards.appendChild(card2);
  divCards.appendChild(card3);
  divCards.appendChild(card4);
}

makeACard();

// put the div into the DOM just before the wrapper element
document.body.appendChild(divCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
