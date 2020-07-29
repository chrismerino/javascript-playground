const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/600x600';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// document.body.appendChild(myParagraph);
// document.body.appendChild(myImage);
// document.body.appendChild(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const uL = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'One';

const li2 = document.createElement('li');
li2.textContent = 'Two';

const li3 = document.createElement('li');
li3.textContent = 'Three';

const li4 = document.createElement('li');
li4.textContent = 'Four';

const li5 = document.createElement('li');
li5.textContent = 'Five';

uL.insertAdjacentElement('afterbegin', li1);
uL.insertAdjacentElement('afterbegin', li2);
uL.insertAdjacentElement('afterbegin', li3);
uL.insertAdjacentElement('afterbegin', li4);
uL.insertAdjacentElement('afterbegin', li5);

document.body.appendChild(uL);
